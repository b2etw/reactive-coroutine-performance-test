package com.example

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
import io.ktor.response.respond
import io.ktor.routing.get
import io.ktor.routing.routing
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

    val client = HttpClient(CIO) {
        install(JsonFeature) {
            serializer = GsonSerializer()
        }
        install(Logging) {
            level = LogLevel.HEADERS
        }
        engine {
            threadsCount = 1000
//            maxConnectionsCount = 8192
        }
    }

    val delayServiceDomain = environment.config.property("ktor.delay.service.domain").getString()

    routing {
        get("/test/ktor") {
            val delay100req = async(Dispatchers.IO) { client.get<DelayResponse>("http://$delayServiceDomain:8888/delay/ms/100") }
            val delay200req = async(Dispatchers.IO) { client.get<DelayResponse>("http://$delayServiceDomain:8888/delay/ms/200") }

            val peroid1 = delay100req.await().totalTimeMillis + delay200req.await().totalTimeMillis
            val delay300req = async(Dispatchers.IO) { client.get<DelayResponse>("http://$delayServiceDomain:8888/delay/ms/$peroid1") }

            val period2 = delay300req.await().totalTimeMillis
            val delay400req = async(Dispatchers.IO) { client.get<DelayResponse>("http://$delayServiceDomain:8888/delay/ms/${period2 + 100}") }
            val delay500req = async(Dispatchers.IO) { client.get<DelayResponse>("http://$delayServiceDomain:8888/delay/ms/${period2 + 200}") }

            call.respond(
                mapOf(
                    "delay100req" to delay100req.await().totalTimeMillis,
                    "delay200req" to delay200req.await().totalTimeMillis,
                    "delay300req" to delay300req.await().totalTimeMillis,
                    "delay400req" to delay400req.await().totalTimeMillis,
                    "delay500req" to delay500req.await().totalTimeMillis
                )
            )
        }
    }
}

data class DelayResponse(val totalTimeMillis: Long)
