package com.example.demo.spring.flux.service

import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.async
import kotlinx.coroutines.coroutineScope
import org.springframework.beans.factory.annotation.Value
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
            val delay1000req = getResponse(1000).bodyToMono(String::class.java)
            val delay800req = getResponse(800).bodyToMono(String::class.java)
            val delay500req = getResponse(500).bodyToMono(String::class.java)
            Mono.zip(delay1000req, delay800req, delay500req)
                .map { v -> "${v.t1} / ${v.t2} / ${v.t3}" }
        }

    suspend fun coroutine() =
        coroutineScope {
            val delay1000req = async(Dispatchers.IO) { getResponse(1000).awaitBody<String>() }
            val delay800req = async(Dispatchers.IO) { getResponse(800).awaitBody<String>() }
            val delay500req = async(Dispatchers.IO) { getResponse(500).awaitBody<String>() }
            "${delay1000req.await()} / ${delay800req.await()} / ${delay500req.await()}"
        }

    private fun getResponse(ms: Long) = webClient.get()
        .uri("http://$domain:8888/delay/ms/$ms")
        .accept(MediaType.APPLICATION_JSON)
        .retrieve()
}
