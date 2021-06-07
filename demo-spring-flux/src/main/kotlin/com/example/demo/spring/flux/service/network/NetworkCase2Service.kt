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
class NetworkCase2Service(
    val webClient: WebClient
) {

    @Value("\${delay.service.domain}")
    val domain: String = ""

    fun flux(time1: Long, time2: Long, delta1: Long, delta2: Long) =
        Flux.mergeSequential(getMonoResponse(time1), getMonoResponse(time2))
            .collectList()
            .flatMap { v ->
                return@flatMap getMonoResponse(time1 + time2)
                    .map { v2 ->
                        v.add(v2)
                        return@map v
                    }
            }.flatMap { v ->
                val period = v[2]["totalTimeMillis"].parseLong()
                Flux.mergeSequential(getMonoResponse(period + delta1), getMonoResponse(period + delta2))
                    .collectList()
                    .map { v2 ->
                        v.addAll(v2)
                        return@map v
                    }
            }.map { v ->
                mapOf(
                    "delay${time1}Res" to v[0]["totalTimeMillis"],
                    "delay${time2}Res" to v[1]["totalTimeMillis"],
                    "delay${time1 + time2}Res" to v[2]["totalTimeMillis"],
                    "delay${time1 + time2 + delta1}Res" to v[3]["totalTimeMillis"],
                    "delay${time1 + time2 + delta2}Res" to v[4]["totalTimeMillis"]
                )
            }

    suspend fun coroutine(time1: Long, time2: Long, delta1: Long, delta2: Long) =
        coroutineScope {
            val delayTime1Res = async(Dispatchers.IO) { getAwaitResponse(time1) }
            val delayTime2Res = async(Dispatchers.IO) { getAwaitResponse(time2) }

            val period1 = delayTime1Res.await()["totalTimeMillis"]!! + delayTime2Res.await()["totalTimeMillis"]!!
            val delayTime3Res = async(Dispatchers.IO) { getAwaitResponse(period1) }

            val period2 = delayTime3Res.await()["totalTimeMillis"]!!
            val delayTime4Res = async(Dispatchers.IO) { getAwaitResponse(period2 + delta1) }
            val delayTime5Res = async(Dispatchers.IO) { getAwaitResponse(period2 + delta2) }

            mapOf(
                "delay${time1}Res" to delayTime1Res.await()["totalTimeMillis"]!!,
                "delay${time2}Res" to delayTime2Res.await()["totalTimeMillis"]!!,
                "delay${time1 + time2}Res" to delayTime3Res.await()["totalTimeMillis"]!!,
                "delay${time1 + time2 + delta1}Res" to delayTime4Res.await()["totalTimeMillis"]!!,
                "delay${time1 + time2 + delta2}Res" to delayTime5Res.await()["totalTimeMillis"]!!
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

    fun Any?.parseLong() = this!!.toString().toLong()
}
