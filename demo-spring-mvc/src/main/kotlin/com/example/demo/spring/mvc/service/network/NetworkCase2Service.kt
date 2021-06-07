package com.example.demo.spring.mvc.service.network

import org.springframework.beans.factory.annotation.Value
import org.springframework.core.ParameterizedTypeReference
import org.springframework.stereotype.Service
import org.springframework.web.reactive.function.client.WebClient
import reactor.core.publisher.Flux

@Service
class NetworkCase2Service(
    val webClient: WebClient
) {

    @Value("\${delay.service.domain}")
    val domain: String = ""

    fun blockMvc(time1: Long, time2: Long, delta1: Long, delta2: Long) =
        run {
            val delayTime1Res = getBlockResponse(time1)!!["totalTimeMillis"].parseLong()
            val delayTime2Res = getBlockResponse(time2)!!["totalTimeMillis"].parseLong()

            val delayTime3Res = getBlockResponse(delayTime1Res + delayTime2Res)!!["totalTimeMillis"].parseLong()

            val delayTime4Res = getBlockResponse(delayTime3Res + delta1)!!["totalTimeMillis"].parseLong()
            val delayTime5Res = getBlockResponse(delayTime3Res + delta2)!!["totalTimeMillis"].parseLong()

            mapOf(
                "delay${time1}Res" to delayTime1Res,
                "delay${time2}Res" to delayTime2Res,
                "delay${time1 + time2}Res" to delayTime3Res,
                "delay${time1 + time2 + delta1}Res" to delayTime4Res,
                "delay${time1 + time2 + delta2}Res" to delayTime5Res
            )
        }

    fun mvc(time1: Long, time2: Long, delta1: Long, delta2: Long) =
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
            }.block()

    fun async(time1: Long, time2: Long, delta1: Long, delta2: Long) =
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
            }.toFuture()

    private fun getBlockResponse(ms: Long) = webClient.get()
        .uri("http://$domain:8888/delay/ms/$ms")
        .retrieve()
        .bodyToMono(object : ParameterizedTypeReference<Map<*, *>>() {})
        .block()

    private fun getMonoResponse(ms: Long) = webClient.get()
        .uri("http://$domain:8888/delay/ms/$ms")
        .retrieve()
        .bodyToMono(object : ParameterizedTypeReference<Map<*, *>>() {})

    fun Any?.parseLong() = this!!.toString().toLong()
}
