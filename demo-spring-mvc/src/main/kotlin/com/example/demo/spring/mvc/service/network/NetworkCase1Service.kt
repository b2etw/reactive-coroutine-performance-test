package com.example.demo.spring.mvc.service.network

import org.springframework.beans.factory.annotation.Value
import org.springframework.core.ParameterizedTypeReference
import org.springframework.stereotype.Service
import org.springframework.web.reactive.function.client.WebClient
import reactor.core.publisher.Flux
import java.util.concurrent.CompletableFuture.allOf

@Service
class NetworkCase1Service(
    val webClient: WebClient
) {

    @Value("\${delay.service.domain}")
    val domain: String = ""

    fun blockMvc(time1: Long, time2: Long, time3: Long) =
        run {
            val delayTime1Res = getBlockResponse(time1)!!["totalTimeMillis"]
            val delayTime2Res = getBlockResponse(time2)!!["totalTimeMillis"]
            val delayTime3Res = getBlockResponse(time3)!!["totalTimeMillis"]

            mapOf(
                "delay${time1}Res" to delayTime1Res,
                "delay${time2}Res" to delayTime2Res,
                "delay${time3}Res" to delayTime3Res
            )
        }

    fun mvc(time1: Long, time2: Long, time3: Long) =
        Flux.mergeSequential(getMonoResponse(time1), getMonoResponse(time2), getMonoResponse(time3))
            .collectList()
            .map { v ->
                mapOf(
                    "delay${time1}Res" to v[0]["totalTimeMillis"],
                    "delay${time2}Res" to v[1]["totalTimeMillis"],
                    "delay${time3}Res" to v[2]["totalTimeMillis"]
                )
            }
            .block()

    fun async(time1: Long, time2: Long, time3: Long) =
        arrayOf(getFutureResponse(time1), getFutureResponse(time2), getFutureResponse(time3))
            .let {
                allOf(*it)
                    .thenApply { v ->
                        return@thenApply it.map { v1 -> v1.get() }
                    }.thenApply { v ->
                        mapOf(
                            "delay${time1}Res" to v[0]["totalTimeMillis"],
                            "delay${time2}Res" to v[1]["totalTimeMillis"],
                            "delay${time3}Res" to v[2]["totalTimeMillis"]
                        )
                    }
            }

    private fun getBlockResponse(ms: Long) = webClient.get()
        .uri("http://$domain:8888/delay/ms/$ms")
        .retrieve()
        .bodyToMono(object : ParameterizedTypeReference<Map<*, *>>() {})
        .block()

    private fun getMonoResponse(ms: Long) = webClient.get()
        .uri("http://$domain:8888/delay/ms/$ms")
        .retrieve()
        .bodyToMono(object : ParameterizedTypeReference<Map<*, *>>() {})

    private fun getFutureResponse(ms: Long) = webClient.get()
        .uri("http://$domain:8888/delay/ms/$ms")
        .retrieve()
        .bodyToMono(object : ParameterizedTypeReference<Map<*, *>>() {})
        .toFuture()
}
