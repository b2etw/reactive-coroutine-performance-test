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
            val round = call.parameters["round"]!!.toInt()
            call.respond(
                mapOf(
                    "Hello World / $round" to BCrypt.withDefaults().hashToString(round, "Hello World".toCharArray())
                )
            )
        }
        get("/test/ktor/network/1") {
            val time1 = call.parameters["time1"]!!.toInt()
            val time2 = call.parameters["time2"]!!.toInt()
            val time3 = call.parameters["time3"]!!.toInt()
            val delayTime1Res = async(Dispatchers.IO) { client.get<DelayResponse>("http://$delayServiceDomain:8888/delay/ms/$time1") }
            val delayTime2Res = async(Dispatchers.IO) { client.get<DelayResponse>("http://$delayServiceDomain:8888/delay/ms/$time2") }
            val delayTime3Res = async(Dispatchers.IO) { client.get<DelayResponse>("http://$delayServiceDomain:8888/delay/ms/$time3") }

            call.respond(
                mapOf(
                    "delay${time1}Res" to delayTime1Res.await().totalTimeMillis,
                    "delay${time2}Res" to delayTime2Res.await().totalTimeMillis,
                    "delay${time3}Res" to delayTime3Res.await().totalTimeMillis
                )
            )
        }
        get("/test/ktor/network/2") {
            val time1 = call.parameters["time1"]!!.toInt()
            val time2 = call.parameters["time2"]!!.toInt()
            val delta1 = call.parameters["delta1"]!!.toInt()
            val delta2 = call.parameters["delta2"]!!.toInt()

            val delayTime1Res = async(Dispatchers.IO) { client.get<DelayResponse>("http://$delayServiceDomain:8888/delay/ms/$time1") }
            val delayTime2Res = async(Dispatchers.IO) { client.get<DelayResponse>("http://$delayServiceDomain:8888/delay/ms/$time2") }

            val peroid1 = delayTime1Res.await().totalTimeMillis + delayTime2Res.await().totalTimeMillis
            val delayTime3Res = async(Dispatchers.IO) { client.get<DelayResponse>("http://$delayServiceDomain:8888/delay/ms/$peroid1") }

            val period2 = delayTime3Res.await().totalTimeMillis
            val delayTime4Res = async(Dispatchers.IO) { client.get<DelayResponse>("http://$delayServiceDomain:8888/delay/ms/${period2 + delta1}") }
            val delayTime5Res = async(Dispatchers.IO) { client.get<DelayResponse>("http://$delayServiceDomain:8888/delay/ms/${period2 + delta2}") }

            call.respond(
                mapOf(
                    "delay${time1}Res" to delayTime1Res.await().totalTimeMillis,
                    "delay${time2}Res" to delayTime2Res.await().totalTimeMillis,
                    "delay${time1 + time2}Res" to delayTime3Res.await().totalTimeMillis,
                    "delay${time1 + time2 + delta1}Res" to delayTime4Res.await().totalTimeMillis,
                    "delay${time1 + time2 + delta2}Res" to delayTime5Res.await().totalTimeMillis
                )
            )
        }
        get("/metrics") {
            call.respond(appMicrometerRegistry.scrape())
        }
    }
}

data class DelayResponse(val totalTimeMillis: Long)
