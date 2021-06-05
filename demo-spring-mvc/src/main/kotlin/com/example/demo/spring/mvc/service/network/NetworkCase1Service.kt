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
            val delay500res = getBlockResponse(500)!!["totalTimeMillis"]
            val delay800req = getBlockResponse(800)!!["totalTimeMillis"]
            val delay1000req = getBlockResponse(1000)!!["totalTimeMillis"]

            mapOf(
                "delay500req" to delay500res,
                "delay800req" to delay800req,
                "delay1000req" to delay1000req
            )
        }

    fun mvc() =
        Flux.mergeSequential(getMonoResponse(500), getMonoResponse(800), getMonoResponse(1000))
            .collectList()
            .map { v ->
                mapOf(
                    "delay500res" to v[0]["totalTimeMillis"],
                    "delay800res" to v[1]["totalTimeMillis"],
                    "delay1000res" to v[2]["totalTimeMillis"]
                )
            }
            .block()

    fun async() =
        arrayOf(getFutureResponse(500), getFutureResponse(800), getFutureResponse(1000))
            .let {
                allOf(*it)
                    .thenApply { v ->
                        return@thenApply it.map { v1 -> v1.get() }
                    }.thenApply { v ->
                        mapOf(
                            "delay500res" to v[0]["totalTimeMillis"],
                            "delay800res" to v[1]["totalTimeMillis"],
                            "delay1000res" to v[2]["totalTimeMillis"]
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
