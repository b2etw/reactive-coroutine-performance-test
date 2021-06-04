package com.example.demo.spring.mvc.service.network

import org.springframework.beans.factory.annotation.Value
import org.springframework.core.ParameterizedTypeReference
import org.springframework.stereotype.Service
import org.springframework.web.reactive.function.client.WebClient
import reactor.core.publisher.Flux
import java.util.concurrent.CompletableFuture.allOf

@Service
class NetworkCase1Service(
    val webClient: WebClient
) {

    @Value("\${delay.service.domain}")
    val domain: String = ""

    fun blockMvc() =
        run {
            val delay200res = getBlockResponse(200)!!["totalTimeMillis"]
            val delay300req = getBlockResponse(300)!!["totalTimeMillis"]
            val delay500req = getBlockResponse(500)!!["totalTimeMillis"]

            mapOf(
                "delay200req" to delay200res,
                "delay300req" to delay300req,
                "delay500req" to delay500req
            )
        }

    fun mvc() =
        Flux.mergeSequential(getMonoResponse(200), getMonoResponse(300), getMonoResponse(500))
            .collectList()
            .map { v ->
                mapOf(
                    "delay200res" to v[0]["totalTimeMillis"],
                    "delay300res" to v[1]["totalTimeMillis"],
                    "delay500res" to v[2]["totalTimeMillis"]
                )
            }
            .block()

    fun async() =
        arrayOf(getFutureResponse(200), getFutureResponse(300), getFutureResponse(500))
            .let {
                allOf(*it)
                    .thenApply { v ->
                        return@thenApply it.map { v1 -> v1.get() }
                    }.thenApply { v ->
                        mapOf(
                            "delay200res" to v[0]["totalTimeMillis"],
                            "delay300res" to v[1]["totalTimeMillis"],
                            "delay500res" to v[2]["totalTimeMillis"]
                        )
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
}
