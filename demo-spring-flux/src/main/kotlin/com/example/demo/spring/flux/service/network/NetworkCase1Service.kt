package com.example.demo.spring.flux.service.network

import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.async
import kotlinx.coroutines.coroutineScope
import org.springframework.beans.factory.annotation.Value
import org.springframework.core.ParameterizedTypeReference
import org.springframework.stereotype.Service
import org.springframework.web.reactive.function.client.WebClient
import org.springframework.web.reactive.function.client.awaitBody
import reactor.core.publisher.Flux

@Service
class NetworkCase1Service(
    val webClient: WebClient
) {

    @Value("\${delay.service.domain}")
    val domain: String = ""

    fun flux(time1: Long, time2: Long, time3: Long) =
        Flux.mergeSequential(getMonoResponse(time1), getMonoResponse(time2), getMonoResponse(time3))
            .collectList()
            .map { v ->
                mapOf(
                    "delay${time1}Res" to v[0]["totalTimeMillis"],
                    "delay${time2}Res" to v[1]["totalTimeMillis"],
                    "delay${time3}Res" to v[2]["totalTimeMillis"]
                )
            }

    suspend fun coroutine(time1: Long, time2: Long, time3: Long) =
        coroutineScope {
            val delayTime1Res = async(Dispatchers.IO) { getAwaitResponse(time1) }
            val delayTime2Res = async(Dispatchers.IO) { getAwaitResponse(time2) }
            val delayTime3Res = async(Dispatchers.IO) { getAwaitResponse(time3) }

            mapOf(
                "delay${time1}Res" to delayTime1Res.await()["totalTimeMillis"]!!,
                "delay${time2}Res" to delayTime2Res.await()["totalTimeMillis"]!!,
                "delay${time3}Res" to delayTime3Res.await()["totalTimeMillis"]!!
            )
        }

    private fun getMonoResponse(ms: Long) = webClient.get()
        .uri("http://$domain:8888/delay/ms/$ms")
        .retrieve()
        .bodyToMono(object : ParameterizedTypeReference<Map<*, *>>() {})

    private suspend fun getAwaitResponse(ms: Long) = webClient.get()
        .uri("http://$domain:8888/delay/ms/$ms")
        .retrieve()
        .awaitBody<Map<String, Long>>()
}
