package com.example.demo.spring.flux.service

import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.async
import kotlinx.coroutines.coroutineScope
import org.springframework.beans.factory.annotation.Value
import org.springframework.core.ParameterizedTypeReference
import org.springframework.http.MediaType
import org.springframework.stereotype.Service
import org.springframework.web.reactive.function.client.WebClient
import org.springframework.web.reactive.function.client.awaitBody
import reactor.core.publisher.Mono

@Service
class TestService(
    val webClient: WebClient
) {

    @Value("\${delay.service.domain}")
    val domain: String = ""

    fun flux() =
        run {
            val delay1000req = getResponse(1000).bodyToMono(object : ParameterizedTypeReference<Map<*, *>>() {})
            val delay800req = getResponse(800).bodyToMono(object : ParameterizedTypeReference<Map<*, *>>() {})
            val delay500req = getResponse(500).bodyToMono(object : ParameterizedTypeReference<Map<*, *>>() {})
            Mono.zip(delay1000req, delay800req, delay500req)
                .map { v ->
                    mapOf(
                        "delay1000req" to v.t1["totalTimeMillis"],
                        "delay800req" to v.t2["totalTimeMillis"],
                        "delay500req" to v.t3["totalTimeMillis"]
                    )
                }
        }

    suspend fun coroutine() =
        coroutineScope {
            val delay1000req = async(Dispatchers.IO) { getResponse(1000).awaitBody<Map<String, Long>>() }
            val delay800req = async(Dispatchers.IO) { getResponse(800).awaitBody<Map<String, Long>>() }
            val delay500req = async(Dispatchers.IO) { getResponse(500).awaitBody<Map<String, Long>>() }
            mapOf(
                "delay1000req" to delay1000req.await()["totalTimeMillis"],
                "delay800req" to delay800req.await()["totalTimeMillis"],
                "delay500req" to delay500req.await()["totalTimeMillis"]
            )
        }

    private fun getResponse(ms: Long) = webClient.get()
        .uri("http://$domain:8888/delay/ms/$ms")
        .accept(MediaType.APPLICATION_JSON)
        .retrieve()
}
