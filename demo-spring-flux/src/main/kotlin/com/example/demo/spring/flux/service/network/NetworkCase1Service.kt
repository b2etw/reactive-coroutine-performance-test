package com.example.demo.spring.flux.service.network

import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.async
import kotlinx.coroutines.coroutineScope
import org.springframework.beans.factory.annotation.Value
import org.springframework.core.ParameterizedTypeReference
import org.springframework.stereotype.Service
import org.springframework.web.reactive.function.client.WebClient
import org.springframework.web.reactive.function.client.awaitBody
import reactor.core.publisher.Flux

@Service
class NetworkCase1Service(
    val webClient: WebClient
) {

    @Value("\${delay.service.domain}")
    val domain: String = ""

    fun flux() =
        Flux.mergeSequential(getMonoResponse(500), getMonoResponse(800), getMonoResponse(1000))
            .collectList()
            .map { v ->
                mapOf(
                    "delay500res" to v[0]["totalTimeMillis"],
                    "delay800res" to v[1]["totalTimeMillis"],
                    "delay1000res" to v[2]["totalTimeMillis"]
                )
            }

    suspend fun coroutine() =
        coroutineScope {
            val delay500res = async(Dispatchers.IO) { getAwaitResponse(500) }
            val delay800res = async(Dispatchers.IO) { getAwaitResponse(800) }
            val delay1000res = async(Dispatchers.IO) { getAwaitResponse(1000) }

            mapOf(
                "delay500res" to delay500res.await()["totalTimeMillis"]!!,
                "delay800res" to delay800res.await()["totalTimeMillis"]!!,
                "delay1000res" to delay1000res.await()["totalTimeMillis"]!!
            )
        }

    private fun getMonoResponse(ms: Long) = webClient.get()
        .uri("http://$domain:8888/delay/ms/$ms")
        .retrieve()
        .bodyToMono(object : ParameterizedTypeReference<Map<*, *>>() {})

    private suspend fun getAwaitResponse(ms: Long) = webClient.get()
        .uri("http://$domain:8888/delay/ms/$ms")
        .retrieve()
        .awaitBody<Map<String, Long>>()
}
