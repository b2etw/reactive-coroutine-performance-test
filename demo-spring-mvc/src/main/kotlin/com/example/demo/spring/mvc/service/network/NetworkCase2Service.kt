package com.example.demo.spring.mvc.service.network

import org.springframework.beans.factory.annotation.Value
import org.springframework.core.ParameterizedTypeReference
import org.springframework.stereotype.Service
import org.springframework.web.reactive.function.client.WebClient
import reactor.core.publisher.Flux

@Service
class NetworkCase2Service(
    val webClient: WebClient
) {

    @Value("\${delay.service.domain}")
    val domain: String = ""

    fun blockMvc() =
        run {
            val delay100res = getBlockResponse(100)!!["totalTimeMillis"].parseLong()
            val delay200res = getBlockResponse(200)!!["totalTimeMillis"].parseLong()

            val delay300req = getBlockResponse(delay100res + delay200res)!!["totalTimeMillis"].parseLong()

            val delay400req = getBlockResponse(delay300req + 100)!!["totalTimeMillis"].parseLong()
            val delay500req = getBlockResponse(delay300req + 200)!!["totalTimeMillis"].parseLong()

            mapOf(
                "delay100req" to delay100res,
                "delay200req" to delay200res,
                "delay300req" to delay300req,
                "delay400req" to delay400req,
                "delay500req" to delay500req
            )
        }

    fun mvc() =
        Flux.mergeSequential(getMonoResponse(100), getMonoResponse(200))
            .collectList()
            .flatMap { v ->
                return@flatMap getMonoResponse(300)
                    .map { v2 ->
                        v.add(v2)
                        return@map v
                    }
            }.flatMap { v ->
                val period = v[2]["totalTimeMillis"].parseLong()
                Flux.mergeSequential(getMonoResponse(period + 100), getMonoResponse(period + 200))
                    .collectList()
                    .map { v2 ->
                        v.addAll(v2)
                        return@map v
                    }
            }.map { v ->
                mapOf(
                    "delay100res" to v[0]["totalTimeMillis"],
                    "delay200res" to v[1]["totalTimeMillis"],
                    "delay300res" to v[2]["totalTimeMillis"],
                    "delay400res" to v[3]["totalTimeMillis"],
                    "delay500res" to v[4]["totalTimeMillis"]
                )
            }.block()

    fun async() =
        Flux.mergeSequential(getMonoResponse(100), getMonoResponse(200))
            .collectList()
            .flatMap { v ->
                return@flatMap getMonoResponse(300)
                    .map { v2 ->
                        v.add(v2)
                        return@map v
                    }
            }.flatMap { v ->
                val period = v[2]["totalTimeMillis"].parseLong()
                Flux.mergeSequential(getMonoResponse(period + 100), getMonoResponse(period + 200))
                    .collectList()
                    .map { v2 ->
                        v.addAll(v2)
                        return@map v
                    }
            }.map { v ->
                mapOf(
                    "delay100res" to v[0]["totalTimeMillis"],
                    "delay200res" to v[1]["totalTimeMillis"],
                    "delay300res" to v[2]["totalTimeMillis"],
                    "delay400res" to v[3]["totalTimeMillis"],
                    "delay500res" to v[4]["totalTimeMillis"]
                )
            }.toFuture()

    private fun getBlockResponse(ms: Long) = webClient.get()
        .uri("http://$domain:8888/delay/ms/$ms")
        .retrieve()
        .bodyToMono(object : ParameterizedTypeReference<Map<*, *>>() {})
        .block()

    private fun getMonoResponse(ms: Long) = webClient.get()
        .uri("http://$domain:8888/delay/ms/$ms")
        .retrieve()
        .bodyToMono(object : ParameterizedTypeReference<Map<*, *>>() {})

    fun Any?.parseLong() = this!!.toString().toLong()
}
