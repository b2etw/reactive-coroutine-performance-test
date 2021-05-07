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
            val delay1000req = getResponse(1000).bodyToMono(String::class.java)
            val delay800req = getResponse(800).bodyToMono(String::class.java)
            val delay500req = getResponse(500).bodyToMono(String::class.java)
            Mono.zip(delay1000req, delay800req, delay500req)
                .map { v -> "${v.t1} / ${v.t2} / ${v.t3}" }
                .block()
        }

    fun async() =
        run {
            // CompletableFuture Style
//            val delay1000req = getResponse(1000).bodyToMono(String::class.java).toFuture()
//            val delay800req = getResponse(800).bodyToMono(String::class.java).toFuture()
//            val delay500req = getResponse(500).bodyToMono(String::class.java).toFuture()
//            CompletableFuture.allOf(delay1000req, delay800req, delay500req).thenApply {
//                "${delay1000req.join()} / ${delay800req.join()} / ${delay500req.join()}"
//            }
            val delay1000req = getResponse(1000).bodyToMono(String::class.java)
            val delay800req = getResponse(800).bodyToMono(String::class.java)
            val delay500req = getResponse(500).bodyToMono(String::class.java)
            Mono.zip(delay1000req, delay800req, delay500req)
                .map { v -> "${v.t1} / ${v.t2} / ${v.t3}" }
                .toFuture()
        }

    private fun getResponse(ms: Long) = webClient.get()
        .uri("http://$domain:8888/delay/ms/$ms")
        .accept(MediaType.APPLICATION_JSON)
        .retrieve()
}