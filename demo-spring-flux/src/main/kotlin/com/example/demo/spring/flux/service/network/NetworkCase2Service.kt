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

    fun flux() =
        Flux.mergeSequential(getMonoResponse(100), getMonoResponse(200))
            .collectList()
            .flatMap { v ->
                return@flatMap getMonoResponse(300)
                    .map { v2 ->
                        v.add(v2)
                        return@map v
                    }
            }.flatMap { v ->
                val period = v[2]["totalTimeMillis"].parseLong()
                Flux.mergeSequential(getMonoResponse(period + 100), getMonoResponse(period + 200))
                    .collectList()
                    .map { v2 ->
                        v.addAll(v2)
                        return@map v
                    }
            }.map { v ->
                mapOf(
                    "delay100res" to v[0]["totalTimeMillis"],
                    "delay200res" to v[1]["totalTimeMillis"],
                    "delay300res" to v[2]["totalTimeMillis"],
                    "delay400res" to v[3]["totalTimeMillis"],
                    "delay500res" to v[4]["totalTimeMillis"]
                )
            }

    suspend fun coroutine() =
        coroutineScope {
            val delay100res = async(Dispatchers.IO) { getAwaitResponse(100) }
            val delay200res = async(Dispatchers.IO) { getAwaitResponse(200) }

            val period1 = delay100res.await()["totalTimeMillis"]!! + delay200res.await()["totalTimeMillis"]!!
            val delay300res = async(Dispatchers.IO) { getAwaitResponse(period1) }

            val period2 = delay300res.await()["totalTimeMillis"]!!
            val delay400res = async(Dispatchers.IO) { getAwaitResponse(period2 + 100) }
            val delay500res = async(Dispatchers.IO) { getAwaitResponse(period2 + 200) }

            mapOf(
                "delay100res" to delay100res.await()["totalTimeMillis"]!!,
                "delay200res" to delay200res.await()["totalTimeMillis"]!!,
                "delay300res" to delay300res.await()["totalTimeMillis"]!!,
                "delay400res" to delay400res.await()["totalTimeMillis"]!!,
                "delay500res" to delay500res.await()["totalTimeMillis"]!!
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
