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

@Service
class TestService(
    val webClient: WebClient
) {

    @Value("\${delay.service.domain}")
    val domain: String = ""

    fun flux() =
        Flux.mergeSequential(getMonoResponse(100), getMonoResponse(200))
            .collectList()
            .map { v ->
                val delay100res = v[0]["totalTimeMillis"].parseLong()
                val delay200res = v[1]["totalTimeMillis"].parseLong()
                val delay300res = getBlockResponse(delay100res + delay200res)!!["totalTimeMillis"].parseLong()

                val delay400And500res = Flux.mergeSequential(getMonoResponse(delay300res + 100), getMonoResponse(delay300res + 200))
                    .collectList()
                    .block()

                mapOf(
                    "delay100res" to delay100res,
                    "delay200res" to delay200res,
                    "delay300res" to delay300res,
                    "delay400res" to delay400And500res!![0]["totalTimeMillis"].parseLong(),
                    "delay500res" to delay400And500res[1]["totalTimeMillis"].parseLong()
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

    private fun getBlockResponse(ms: Long) = webClient.get()
        .uri("http://$domain:8888/delay/ms/$ms")
        .retrieve()
        .bodyToMono(object : ParameterizedTypeReference<Map<*, *>>() {})
        .block()

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
