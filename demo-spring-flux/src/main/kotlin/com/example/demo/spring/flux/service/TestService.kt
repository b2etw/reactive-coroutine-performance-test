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

    fun flux() = getResponse().bodyToMono(String::class.java)

    suspend fun coroutine() = getResponse().awaitBody<String>()

    private fun getResponse() = webClient.get()
        .uri("http://$domain:8888/mock/delay/1")
        .accept(MediaType.APPLICATION_JSON)
        .retrieve()
}