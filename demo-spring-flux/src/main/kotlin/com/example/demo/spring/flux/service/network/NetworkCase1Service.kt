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
        Flux.mergeSequential(getMonoResponse(200), getMonoResponse(300), getMonoResponse(300))
            .collectList()
            .map { v ->
                mapOf(
                    "delay200res" to v[0]["totalTimeMillis"],
                    "delay300res" to v[1]["totalTimeMillis"],
                    "delay500res" to v[2]["totalTimeMillis"]
                )
            }

    suspend fun coroutine() =
        coroutineScope {
            val delay200res = async(Dispatchers.IO) { getAwaitResponse(200) }
            val delay300res = async(Dispatchers.IO) { getAwaitResponse(300) }
            val delay500res = async(Dispatchers.IO) { getAwaitResponse(500) }

            mapOf(
                "delay200res" to delay200res.await()["totalTimeMillis"]!!,
                "delay300res" to delay300res.await()["totalTimeMillis"]!!,
                "delay500res" to delay500res.await()["totalTimeMillis"]!!
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
