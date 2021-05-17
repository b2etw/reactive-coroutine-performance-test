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
            val delay1000req =
                async(Dispatchers.IO) { client.get<DelayResponse>("http://$delayServiceDomain:8888/delay/ms/1000") }
            val delay800req =
                async(Dispatchers.IO) { client.get<DelayResponse>("http://$delayServiceDomain:8888/delay/ms/800") }
            val delay500req =
                async(Dispatchers.IO) { client.get<DelayResponse>("http://$delayServiceDomain:8888/delay/ms/500") }

            val ms = delay1000req.await().totalTimeMillis + delay800req.await().totalTimeMillis + delay500req.await().totalTimeMillis - 1200
            val delay100req =
                async(Dispatchers.IO) { client.get<DelayResponse>("http://$delayServiceDomain:8888/delay/ms/$ms") }

            val delay200req =
                async(Dispatchers.IO) { client.get<DelayResponse>("http://$delayServiceDomain:8888/delay/ms/${delay1000req.await().totalTimeMillis + 100}") }
            val delay300req =
                async(Dispatchers.IO) { client.get<DelayResponse>("http://$delayServiceDomain:8888/delay/ms/${delay100req.await().totalTimeMillis + 200}") }

            call.respond(
                mapOf(
                    "delay1000req" to delay1000req.await().totalTimeMillis,
                    "delay800req" to delay800req.await().totalTimeMillis,
                    "delay500req" to delay500req.await().totalTimeMillis,
                    "delay100req" to delay100req.await().totalTimeMillis,
                    "delay200req" to delay200req.await().totalTimeMillis,
                    "delay300req" to delay300req.await().totalTimeMillis
                )
            )
        }
    }


}

data class DelayResponse(val totalTimeMillis: Long)
