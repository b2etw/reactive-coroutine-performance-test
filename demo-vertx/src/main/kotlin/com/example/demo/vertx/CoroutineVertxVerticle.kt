package com.example.demo.vertx

import io.vertx.core.Promise
import io.vertx.core.Vertx
import io.vertx.core.VertxOptions
import io.vertx.core.json.JsonObject
import io.vertx.ext.web.Route
import io.vertx.ext.web.Router
import io.vertx.ext.web.RoutingContext
import io.vertx.ext.web.client.WebClient
import io.vertx.kotlin.coroutines.CoroutineVerticle
import io.vertx.kotlin.coroutines.await
import io.vertx.kotlin.coroutines.dispatcher
import io.vertx.micrometer.MicrometerMetricsOptions
import io.vertx.micrometer.PrometheusScrapingHandler
import io.vertx.micrometer.VertxPrometheusOptions
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.async
import kotlinx.coroutines.launch
import org.slf4j.LoggerFactory

class CoroutineVertxVerticle : CoroutineVerticle() {

  private val log = LoggerFactory.getLogger(this::class.java)

  private val delayServiceDomain = System.getenv().getOrDefault("DELAY_SERVICE_DOMAIN", "localhost")


  override fun start(startFuture: Promise<Void>?) {

    val httpServer = vertx.createHttpServer()
    val router = Router.router(vertx)

    router.get("/test/coroutine/network/1").coroutineHandler { ctx ->
      val delay500res = async(Dispatchers.IO) { getAwaitResponse(500) }
      val delay800res = async(Dispatchers.IO) { getAwaitResponse(800) }
      val delay1000res = async(Dispatchers.IO) { getAwaitResponse(1000) }

      ctx.response().putHeader("Content-Type", "application/json")
      ctx.response().end(
        JsonObject()
          .put("delay500res", delay500res.await().bodyAsJsonObject().getLong("totalTimeMillis"))
          .put("delay800res", delay800res.await().bodyAsJsonObject().getLong("totalTimeMillis"))
          .put("delay1000res", delay1000res.await().bodyAsJsonObject().getLong("totalTimeMillis"))
          .encode()
      )
    }

    router.get("/test/coroutine/network/2").coroutineHandler { ctx ->
      val delay100res = async(Dispatchers.IO) { getAwaitResponse(100) }
      val delay200res = async(Dispatchers.IO) { getAwaitResponse(200) }
      val period1 = delay100res.await().bodyAsJsonObject().getLong("totalTimeMillis") +
        delay200res.await().bodyAsJsonObject().getLong("totalTimeMillis")

      val delay300res = async(Dispatchers.IO) { getAwaitResponse(period1) }

      val period2 = delay300res.await().bodyAsJsonObject().getLong("totalTimeMillis")
      val delay400res = async(Dispatchers.IO) { getAwaitResponse(period2 + 100) }
      val delay500res = async(Dispatchers.IO) { getAwaitResponse(period2 + 200) }

      ctx.response().putHeader("Content-Type", "application/json")
      ctx.response().end(
        JsonObject()
          .put("delay100res", delay100res.await().bodyAsJsonObject().getLong("totalTimeMillis"))
          .put("delay200res", delay200res.await().bodyAsJsonObject().getLong("totalTimeMillis"))
          .put("delay300res", delay300res.await().bodyAsJsonObject().getLong("totalTimeMillis"))
          .put("delay400res", delay400res.await().bodyAsJsonObject().getLong("totalTimeMillis"))
          .put("delay500res", delay500res.await().bodyAsJsonObject().getLong("totalTimeMillis"))
          .encode()
      )
    }

    router.route("/metrics").handler(PrometheusScrapingHandler.create())

    httpServer
      .requestHandler(router)
      .listen(8080) {
        log.info("HTTP server started on port 8080 succeeded: ${it.succeeded()}")
      }

    vertx.deployVerticle(ServiceVerticle())
  }

  private fun Route.coroutineHandler(fn: suspend (RoutingContext) -> Unit): Route {
    return handler { ctx ->
      launch(ctx.vertx().dispatcher()) {
        try {
          fn(ctx)
        } catch (e: Exception) {
          ctx.fail(e)
        }
      }
    }
  }

  private suspend fun getAwaitResponse(ms: Long) =
    WebClient.create(vertx)
      .get(8888, delayServiceDomain, "/delay/ms/$ms")
      .send()
      .await()
}

fun main() {
  val vertx = Vertx.vertx(
    VertxOptions().setMetricsOptions(
      MicrometerMetricsOptions()
        .setPrometheusOptions(
          VertxPrometheusOptions().setEnabled(true)
        ).setEnabled(true)
        .setJvmMetricsEnabled(true)
    )
  )

  vertx.deployVerticle(CoroutineVertxVerticle())
}
