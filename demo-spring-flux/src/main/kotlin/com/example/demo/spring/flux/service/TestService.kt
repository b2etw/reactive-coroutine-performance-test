package com.example.demo.spring.flux.service

import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.async
import kotlinx.coroutines.awaitAll
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
            val delay500req = getResponse(500).bodyToMono(String::class.java)
            val delay300req = getResponse(300).bodyToMono(String::class.java)
            val delay200req = getResponse(200).bodyToMono(String::class.java)
            Mono.zip(delay500req, delay300req, delay200req)
                .map { v -> "${v.t1} / ${v.t2} / ${v.t3}" }
        }

    suspend fun coroutine() =
        coroutineScope {
            val delay500req = async(Dispatchers.IO) { getResponse(500).awaitBody<String>() }
            val delay300req = async(Dispatchers.IO) { getResponse(300).awaitBody<String>() }
            val delay200req = async(Dispatchers.IO) { getResponse(200).awaitBody<String>() }
            "${delay500req.await()} / ${delay300req.await()} / ${delay200req.await()}"
        }

    private fun getResponse(ms: Long) = webClient.get()
        .uri("http://$domain:8888/mock/delay/ms/$ms")
        .accept(MediaType.APPLICATION_JSON)
        .retrieve()
}
