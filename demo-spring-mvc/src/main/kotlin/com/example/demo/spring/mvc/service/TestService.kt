package com.example.demo.spring.mvc.service

import org.springframework.beans.factory.annotation.Value
import org.springframework.core.ParameterizedTypeReference
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
            val delay1000req = getResponse(1000)
            val delay800req = getResponse(800)
            val delay500req = getResponse(500)
            Mono.zip(delay1000req, delay800req, delay500req)
                .map { v ->
                    mapOf(
                        "delay1000req" to v.t1["totalTimeMillis"],
                        "delay800req" to v.t2["totalTimeMillis"],
                        "delay500req" to v.t3["totalTimeMillis"]
                    )
                }
                .block()
        }

    fun async() =
        run {
            // CompletableFuture Style
//            val delay1000req = getResponse(1000).toFuture()
//            val delay800req = getResponse(800).toFuture()
//            val delay500req = getResponse(500).toFuture()
//            CompletableFuture.allOf(delay1000req, delay800req, delay500req).thenApply {
//                "${delay1000req.join()} / ${delay800req.join()} / ${delay500req.join()}"
//            }
            val delay1000req = getResponse(1000)
            val delay800req = getResponse(800)
            val delay500req = getResponse(500)
            Mono.zip(delay1000req, delay800req, delay500req)
                .map { v ->
                    mapOf(
                        "delay1000req" to v.t1["totalTimeMillis"],
                        "delay800req" to v.t2["totalTimeMillis"],
                        "delay500req" to v.t3["totalTimeMillis"]
                    )
                }
                .toFuture()
        }

    private fun getResponse(ms: Long) = webClient.get()
        .uri("http://$domain:8888/delay/ms/$ms")
        .accept(MediaType.APPLICATION_JSON)
        .retrieve()
        .bodyToMono(object : ParameterizedTypeReference<Map<*, *>>() {})
}