package com.example.demo.spring.flux.service

import org.springframework.beans.factory.annotation.Value
import org.springframework.http.MediaType
import org.springframework.stereotype.Service
import org.springframework.web.reactive.function.client.WebClient
import org.springframework.web.reactive.function.client.awaitBody

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
            delay500req
                .zipWith(delay300req) { a, b -> "$a / $b" }
                .zipWith(delay200req) { a, b -> "$a / $b" }
        }

    suspend fun coroutine() =
        run {
            val delay500req = getResponse(500).awaitBody<String>()
            val delay300req = getResponse(300).awaitBody<String>()
            val delay200req = getResponse(200).awaitBody<String>()
            "$delay500req / $delay300req / $delay200req"
        }

    private fun getResponse(ms: Long) = webClient.get()
        .uri("http://$domain:8888/mock/delay/ms/$ms")
        .accept(MediaType.APPLICATION_JSON)
        .retrieve()
}
