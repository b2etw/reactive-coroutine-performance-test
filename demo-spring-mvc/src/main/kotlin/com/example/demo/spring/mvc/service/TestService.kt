package com.example.demo.spring.mvc.service

import org.springframework.beans.factory.annotation.Value
import org.springframework.http.MediaType
import org.springframework.stereotype.Service
import org.springframework.web.reactive.function.client.WebClient
import reactor.core.publisher.Mono

@Service
class TestService(
    val webClient: WebClient
) {

    @Value("\${delay.service.domain}")
    val domain: String = ""

    fun mvc() =
        run {
            val delay500req = getResponse(500).bodyToMono(String::class.java)
            val delay300req = getResponse(300).bodyToMono(String::class.java)
            val delay200req = getResponse(200).bodyToMono(String::class.java)
            Mono.zip(delay500req, delay300req, delay200req).map { v -> "${v.t1} / ${v.t2} / ${v.t3}" }.block()
        }

    fun async() =
        run {
            // CompletableFuture Style
//            val delay500req = getResponse(500).bodyToMono(String::class.java).toFuture()
//            val delay300req = getResponse(300).bodyToMono(String::class.java).toFuture()
//            val delay200req = getResponse(200).bodyToMono(String::class.java).toFuture()
//            CompletableFuture.allOf(delay500req, delay300req, delay200req).thenApply {
//                "${delay500req.join()} / ${delay300req.join()} / ${delay200req.join()}"
//            }
            val delay500req = getResponse(500).bodyToMono(String::class.java)
            val delay300req = getResponse(300).bodyToMono(String::class.java)
            val delay200req = getResponse(200).bodyToMono(String::class.java)
            Mono.zip(delay500req, delay300req, delay200req).map { v -> "${v.t1} / ${v.t2} / ${v.t3}" }.toFuture()
        }

    private fun getResponse(ms: Long) = webClient.get()
        .uri("http://$domain:8888/mock/delay/ms/$ms")
        .accept(MediaType.APPLICATION_JSON)
        .retrieve()
}