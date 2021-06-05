package com.example

import at.favre.lib.crypto.bcrypt.BCrypt
import com.fasterxml.jackson.databind.SerializationFeature
import io.ktor.application.Application
import io.ktor.application.call
import io.ktor.application.install
import io.ktor.client.HttpClient
import io.ktor.client.engine.cio.CIO
import io.ktor.client.features.json.GsonSerializer
import io.ktor.client.features.json.JsonFeature
import io.ktor.client.features.logging.LogLevel
import io.ktor.client.features.logging.Logging
import io.ktor.client.request.get
import io.ktor.features.ContentNegotiation
import io.ktor.jackson.jackson
import io.ktor.metrics.micrometer.MicrometerMetrics
import io.ktor.response.respond
import io.ktor.routing.get
import io.ktor.routing.routing
import io.micrometer.prometheus.PrometheusConfig
import io.micrometer.prometheus.PrometheusMeterRegistry
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.async

fun main(args: Array<String>): Unit = io.ktor.server.netty.EngineMain.main(args)

@Suppress("unused") // Referenced in application.conf
@kotlin.jvm.JvmOverloads
fun Application.module(testing: Boolean = false) {
    install(ContentNegotiation) {
        jackson {
            enable(SerializationFeature.INDENT_OUTPUT)
        }
    }
    val appMicrometerRegistry = PrometheusMeterRegistry(PrometheusConfig.DEFAULT)
    install(MicrometerMetrics) {
        registry = appMicrometerRegistry
    }

    val client = HttpClient(CIO) {
        install(JsonFeature) {
            serializer = GsonSerializer()
        }
        install(Logging) {
            level = LogLevel.HEADERS
        }
        engine {
            threadsCount = 1000
        }
    }

    val delayServiceDomain = environment.config.property("ktor.delay.service.domain").getString()

    routing {
        get("/test/ktor/cpu/1") {
            call.respond(
                mapOf(
                    "Hello World / 14" to BCrypt.withDefaults().hashToString(14, "Hello World".toCharArray())
                )
            )
        }
        get("/test/ktor/network/1") {
            val delay500res = async(Dispatchers.IO) { client.get<DelayResponse>("http://$delayServiceDomain:8888/delay/ms/500") }
            val delay800res = async(Dispatchers.IO) { client.get<DelayResponse>("http://$delayServiceDomain:8888/delay/ms/800") }
            val delay1000res = async(Dispatchers.IO) { client.get<DelayResponse>("http://$delayServiceDomain:8888/delay/ms/1000") }

            call.respond(
                mapOf(
                    "delay500res" to delay500res.await().totalTimeMillis,
                    "delay800res" to delay800res.await().totalTimeMillis,
                    "delay1000res" to delay1000res.await().totalTimeMillis
                )
            )
        }
        get("/test/ktor/network/2") {
            val delay100res = async(Dispatchers.IO) { client.get<DelayResponse>("http://$delayServiceDomain:8888/delay/ms/100") }
            val delay200res = async(Dispatchers.IO) { client.get<DelayResponse>("http://$delayServiceDomain:8888/delay/ms/200") }

            val peroid1 = delay100res.await().totalTimeMillis + delay200res.await().totalTimeMillis
            val delay300res = async(Dispatchers.IO) { client.get<DelayResponse>("http://$delayServiceDomain:8888/delay/ms/$peroid1") }

            val period2 = delay300res.await().totalTimeMillis
            val delay400res = async(Dispatchers.IO) { client.get<DelayResponse>("http://$delayServiceDomain:8888/delay/ms/${period2 + 100}") }
            val delay500res = async(Dispatchers.IO) { client.get<DelayResponse>("http://$delayServiceDomain:8888/delay/ms/${period2 + 200}") }

            call.respond(
                mapOf(
                    "delay100res" to delay100res.await().totalTimeMillis,
                    "delay200res" to delay200res.await().totalTimeMillis,
                    "delay300res" to delay300res.await().totalTimeMillis,
                    "delay400res" to delay400res.await().totalTimeMillis,
                    "delay500res" to delay500res.await().totalTimeMillis
                )
            )
        }
        get("/metrics") {
            call.respond(appMicrometerRegistry.scrape())
        }
    }
}

data class DelayResponse(val totalTimeMillis: Long)
