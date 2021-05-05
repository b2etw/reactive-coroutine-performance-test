package com.example.demo.spring.mvc.service

import org.springframework.beans.factory.annotation.Value
import org.springframework.http.MediaType
import org.springframework.stereotype.Service
import org.springframework.web.reactive.function.client.WebClient

@Service
class TestService(
    val webClient: WebClient
) {

    @Value("\${delay.service.domain}")
    val domain: String = ""

    fun mvc() = getResponse().bodyToMono(String::class.java).block()

    fun async() = getResponse().bodyToMono(String::class.java).toFuture()

    private fun getResponse() = webClient.get()
        .uri("http://$domain:8888/mock/delay/1")
        .accept(MediaType.APPLICATION_JSON)
        .retrieve()
}