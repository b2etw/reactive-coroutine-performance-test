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
            val delay100req = getBlockResponse(100)
            val delay200req = getBlockResponse(200)

            val period1 = delay100req!!["totalTimeMillis"].parseLong() + delay200req!!["totalTimeMillis"].parseLong()
            val delay300req = getBlockResponse(period1)

            val period2 = delay300req!!["totalTimeMillis"].parseLong()
            val delay400req = getBlockResponse(period2 + 100)
            val delay500req = getBlockResponse(period2 + 200)

            mapOf(
                "delay100req" to delay100req["totalTimeMillis"],
                "delay200req" to delay200req["totalTimeMillis"],
                "delay300req" to delay300req["totalTimeMillis"],
                "delay400req" to delay400req!!["totalTimeMillis"],
                "delay500req" to delay500req!!["totalTimeMillis"]
            )
        }

    fun mvc() =
        Mono.zip(getMonoResponse(100), getMonoResponse(200))
            .map { v ->
                val period1 = v.t1["totalTimeMillis"].parseLong() + v.t2["totalTimeMillis"].parseLong()
                val delay300req = getMonoResponse(period1).block()!!["totalTimeMillis"].parseLong()
                Mono.zip(getMonoResponse(delay300req + 100), getMonoResponse(delay300req + 200))
                    .map { v2 ->
                        mapOf(
                            "delay100req" to v.t1["totalTimeMillis"],
                            "delay200req" to v.t2["totalTimeMillis"],
                            "delay300req" to delay300req,
                            "delay400req" to v2.t1["totalTimeMillis"],
                            "delay500req" to v2.t2["totalTimeMillis"]
                        )
                    }.block()
            }.block()

    fun async() =
        arrayOf(getFutureResponse(100), getFutureResponse(200))
            .let {
                allOf(*it)
                    .thenApply { v ->
                        mapOf(
                            "delay100req" to it[0].get()["totalTimeMillis"],
                            "delay200req" to it[1].get()["totalTimeMillis"]
                        )
                    }.thenApply { v ->
                        val period1 = v["delay100req"].parseLong() + v["delay200req"].parseLong()
                        getFutureResponse(period1)
                            .thenApply { v2 ->
                                val peroid2 = v2["totalTimeMillis"].parseLong()
                                val delay400req = getFutureResponse(peroid2 + 100)
                                val delay500req = getFutureResponse(peroid2 + 200)
                                allOf(delay400req, delay500req)
                                    .thenApply {
                                        mapOf(
                                            "delay100req" to v["delay100req"],
                                            "delay200req" to v["delay200req"],
                                            "delay300req" to peroid2,
                                            "delay400req" to delay400req.get()["totalTimeMillis"],
                                            "delay500req" to delay500req.get()["totalTimeMillis"]
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