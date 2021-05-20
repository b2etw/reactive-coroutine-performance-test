package com.example.demo.spring.flux.service

import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.async
import kotlinx.coroutines.coroutineScope
import org.springframework.beans.factory.annotation.Value
import org.springframework.core.ParameterizedTypeReference
import org.springframework.stereotype.Service
import org.springframework.web.reactive.function.client.WebClient
import org.springframework.web.reactive.function.client.awaitBody
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

@Service
class TestService(
    val webClient: WebClient
) {

    @Value("\${delay.service.domain}")
    val domain: String = ""

    fun flux() =
        run {
            Flux.just(40L, 60L)
                .map { v -> getResponse(v).bodyToMono(object : ParameterizedTypeReference<Map<*, *>>() {}) }
                .map { v: Mono<Map<*, *>> -> v.block()!!["totalTimeMillis"] }




//            val delay40req = getResponse(40).bodyToMono(object : ParameterizedTypeReference<Map<*, *>>() {})
//            val delay60req = getResponse(60).bodyToMono(object : ParameterizedTypeReference<Map<*, *>>() {})
//
//
//
//            Mono.zip(delay40req, delay60req)
//                .map { v -> v.t1["totalTimeMillis"].toString().toLong() + v.t2["totalTimeMillis"].toString().toLong() }
//                .map { v -> getResponse(40).bodyToMono(object : ParameterizedTypeReference<Map<*, *>>() {}) }
//
//            Mono.zip(delay40req, delay60req)
//                .map { v ->
//                    mapOf(
//                        "delay1000req" to v.t1["totalTimeMillis"],
//                        "delay800req" to v.t2["totalTimeMillis"],
//                    )
//                }
        }

    suspend fun coroutine() =
        coroutineScope {
            val delay40req = async(Dispatchers.IO) { getResponse(40).awaitBody<Map<String, Long>>() }
            val delay60req = async(Dispatchers.IO) { getResponse(60).awaitBody<Map<String, Long>>() }

            val ms = delay40req.await()["totalTimeMillis"]!! + delay60req.await()["totalTimeMillis"]!!
            val delay100req = async(Dispatchers.IO) { getResponse(ms).awaitBody<Map<String, Long>>() }

            val delay350req = async(Dispatchers.IO) { getResponse(350).awaitBody<Map<String, Long>>() }
            val delay450req = async(Dispatchers.IO) { getResponse(450).awaitBody<Map<String, Long>>() }

            mapOf(
                "delay40req" to delay40req.await()["totalTimeMillis"],
                "delay60req" to delay60req.await()["totalTimeMillis"],
                "delay100req" to delay100req.await()["totalTimeMillis"],
                "delay350req" to delay350req.await()["totalTimeMillis"],
                "delay450req" to delay450req.await()["totalTimeMillis"]
            )
        }

    private fun getResponse(ms: Long) = webClient.get()
        .uri("http://$domain:8888/delay/ms/$ms")
        .retrieve()
}
