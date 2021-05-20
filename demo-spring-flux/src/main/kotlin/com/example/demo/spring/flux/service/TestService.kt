package com.example.demo.spring.flux.service

import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.async
import kotlinx.coroutines.coroutineScope
import org.springframework.beans.factory.annotation.Value
import org.springframework.core.ParameterizedTypeReference
import org.springframework.stereotype.Service
import org.springframework.web.reactive.function.client.WebClient
import org.springframework.web.reactive.function.client.awaitBody
import reactor.core.publisher.Mono

@Service
class TestService(
    val webClient: WebClient
) {

    @Value("\${delay.service.domain}")
    val domain: String = ""

    fun flux() =
        Mono.zip(getMonoResponse(100), getMonoResponse(200))
            .map { v ->
                val period1 = v.t1["totalTimeMillis"].parseLong() + v.t2["totalTimeMillis"].parseLong()
                val delay300req = getMonoResponse(period1).block()!!["totalTimeMillis"].parseLong()
                Mono.zip(getMonoResponse(delay300req + 100), getMonoResponse(delay300req + 200))
                    .map { v2 ->
                        mapOf(
                            "delay100req" to v.t1["totalTimeMillis"],
                            "delay200req" to v.t2["totalTimeMillis"],
                            "delay300req" to delay300req,
                            "delay400req" to v2.t1["totalTimeMillis"],
                            "delay500req" to v2.t2["totalTimeMillis"]
                        )
                    }.block()
            }

    suspend fun coroutine() =
        coroutineScope {
            val delay100req = async(Dispatchers.IO) { getAwaitResponse(100) }
            val delay200req = async(Dispatchers.IO) { getAwaitResponse(200) }

            val period1 = delay100req.await()["totalTimeMillis"]!! + delay200req.await()["totalTimeMillis"]!!
            val delay300req = async(Dispatchers.IO) { getAwaitResponse(period1) }

            val period2 = delay300req.await()["totalTimeMillis"]!!
            val delay400req = async(Dispatchers.IO) { getAwaitResponse(period2 + 100) }
            val delay500req = async(Dispatchers.IO) { getAwaitResponse(period2 + 200) }

            mapOf(
                "delay100req" to delay100req.await()["totalTimeMillis"],
                "delay200req" to delay200req.await()["totalTimeMillis"],
                "delay300req" to delay300req.await()["totalTimeMillis"],
                "delay400req" to delay400req.await()["totalTimeMillis"],
                "delay500req" to delay500req.await()["totalTimeMillis"]
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
