package com.example

import com.fasterxml.jackson.databind.*
import io.ktor.application.*
import io.ktor.client.*
import io.ktor.client.engine.cio.*
import io.ktor.client.features.json.*
import io.ktor.client.features.logging.*
import io.ktor.client.request.*
import io.ktor.features.*
import io.ktor.http.*
import io.ktor.jackson.*
import io.ktor.request.*
import io.ktor.response.*
import io.ktor.routing.*
import kotlinx.coroutines.*

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
            val delay1000req = async(Dispatchers.IO) { client.get<DelayResponse>("http://$delayServiceDomain:8888/delay/ms/1000") }
            val delay800req = async(Dispatchers.IO) { client.get<DelayResponse>("http://$delayServiceDomain:8888/delay/ms/800") }
            val delay500req = async(Dispatchers.IO) { client.get<DelayResponse>("http://$delayServiceDomain:8888/delay/ms/500") }
            call.respond(
                mapOf(
                    "delay1000req" to delay1000req.await().totalTimeMillis,
                    "delay800req" to delay800req.await().totalTimeMillis,
                    "delay500req" to delay500req.await().totalTimeMillis
                )
            )
        }
    }


}

data class DelayResponse(val totalTimeMillis: Long)
