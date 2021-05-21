package com.example.demo.spring.mvc.service

import org.springframework.beans.factory.annotation.Value
import org.springframework.core.ParameterizedTypeReference
import org.springframework.stereotype.Service
import org.springframework.web.reactive.function.client.WebClient
import reactor.core.publisher.Mono
import java.util.concurrent.CompletableFuture.allOf

@Service
class TestService(
    val webClient: WebClient
) {

    @Value("\${delay.service.domain}")
    val domain: String = ""

    fun blockMvc() =
        run {
            val delay100res = getBlockResponse(100)!!["totalTimeMillis"].parseLong()
            val delay200res = getBlockResponse(200)!!["totalTimeMillis"].parseLong()

            val delay300req = getBlockResponse(delay100res + delay200res)!!["totalTimeMillis"].parseLong()

            val delay400req = getBlockResponse(delay300req + 100)
            val delay500req = getBlockResponse(delay300req + 200)

            mapOf(
                "delay100req" to delay100res,
                "delay200req" to delay200res,
                "delay300req" to delay300req,
                "delay400req" to delay400req,
                "delay500req" to delay500req
            )
        }

    fun mvc() =
        Mono.zip(
            getMonoResponse(100),
            getMonoResponse(200)
        )
            .map { v ->
                val delay100res = v.t1["totalTimeMillis"].parseLong()
                val delay200res = v.t2["totalTimeMillis"].parseLong()
                val delay300res = getMonoResponse(delay100res + delay200res).block()!!["totalTimeMillis"].parseLong()
                Mono.zip(
                    getMonoResponse(delay300res + 100),
                    getMonoResponse(delay300res + 200)
                )
                    .map { v2 ->
                        mapOf(
                            "delay100res" to delay100res,
                            "delay200res" to delay200res,
                            "delay300res" to delay300res,
                            "delay400res" to v2.t1["totalTimeMillis"].parseLong(),
                            "delay500res" to v2.t2["totalTimeMillis"].parseLong()
                        )
                    }.block()
            }

    fun async() =
        arrayOf(
            getFutureResponse(100),
            getFutureResponse(200)
        )
            .let {
                allOf(*it)
                    .thenApply { v ->
                        mapOf(
                            "delay100res" to it[0].get()["totalTimeMillis"].parseLong(),
                            "delay200res" to it[1].get()["totalTimeMillis"].parseLong()
                        )
                    }.thenApply { v ->
                        val delay100res = v["delay100res"]!!
                        val delay200res = v["delay200res"]!!
                        getFutureResponse(delay100res + delay200res)
                            .thenApply { v2 ->
                                val delay300res = v2["totalTimeMillis"].parseLong()
                                val delay400res = getFutureResponse(delay300res + 100)
                                val delay500res = getFutureResponse(delay300res + 200)
                                allOf(delay400res, delay500res)
                                    .thenApply {
                                        mapOf(
                                            "delay100res" to v["delay100res"],
                                            "delay200res" to v["delay200res"],
                                            "delay300res" to delay300res,
                                            "delay400res" to delay400res.get()["totalTimeMillis"],
                                            "delay500res" to delay500res.get()["totalTimeMillis"]
                                        )
                                    }
                            }
                    }
            }

    private fun getBlockResponse(ms: Long) = webClient.get()
        .uri("http://$domain:8888/delay/ms/$ms")
        .retrieve()
        .bodyToMono(object : ParameterizedTypeReference<Map<*, *>>() {})
        .block()

    private fun getMonoResponse(ms: Long) = webClient.get()
        .uri("http://$domain:8888/delay/ms/$ms")
        .retrieve()
        .bodyToMono(object : ParameterizedTypeReference<Map<*, *>>() {})

    private fun getFutureResponse(ms: Long) = webClient.get()
        .uri("http://$domain:8888/delay/ms/$ms")
        .retrieve()
        .bodyToMono(object : ParameterizedTypeReference<Map<*, *>>() {})
        .toFuture()

    fun Any?.parseLong() = this!!.toString().toLong()
}