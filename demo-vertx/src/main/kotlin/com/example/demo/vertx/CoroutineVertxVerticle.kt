package com.example.demo.vertx

import io.vertx.core.DeploymentOptions
import io.vertx.core.Promise
import io.vertx.core.Vertx
import io.vertx.core.VertxOptions
import io.vertx.core.json.JsonObject
import io.vertx.ext.web.Route
import io.vertx.ext.web.Router
import io.vertx.ext.web.RoutingContext
import io.vertx.kotlin.coroutines.CoroutineVerticle
import io.vertx.kotlin.coroutines.dispatcher
import io.vertx.micrometer.MicrometerMetricsOptions
import io.vertx.micrometer.PrometheusScrapingHandler
import io.vertx.micrometer.VertxPrometheusOptions
import kotlinx.coroutines.launch
import org.slf4j.LoggerFactory

class CoroutineVertxVerticle : CoroutineVerticle() {

  private val log = LoggerFactory.getLogger(this::class.java)

  override fun start(startFuture: Promise<Void>?) {
    val httpServer = vertx.createHttpServer()
    val router = Router.router(vertx)

    router.get("/test/coroutine").coroutineHandler { ctx ->
      vertx.eventBus().request<JsonObject>("test", JsonObject().put("", "")).onComplete { reply ->
        if (reply.succeeded()) {
          ctx.response().putHeader("Content-Type", "application/json")
          ctx.response().end(reply.result().body().encode())
        } else {
          log.error(reply.cause().message, reply.cause())
          ctx.response().setStatusCode(500).end(reply.cause().message)
        }
      }
    }

    router.route("/metrics").handler(PrometheusScrapingHandler.create())

    httpServer
      .requestHandler(router)
      .listen(8080) {
        log.info("HTTP server started on port 8080 succeeded: ${it.succeeded()}")
      }

    vertx.deployVerticle(TestVerticle(), DeploymentOptions().setWorker(true).setWorkerPoolSize(1000))
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
