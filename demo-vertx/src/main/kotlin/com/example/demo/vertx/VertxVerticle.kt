package com.example.demo.vertx

import io.vertx.core.AbstractVerticle
import io.vertx.core.DeploymentOptions
import io.vertx.core.Promise
import io.vertx.core.Vertx
import io.vertx.core.VertxOptions
import io.vertx.core.json.JsonObject
import io.vertx.ext.web.Router
import io.vertx.micrometer.MicrometerMetricsOptions
import io.vertx.micrometer.PrometheusScrapingHandler
import io.vertx.micrometer.VertxPrometheusOptions
import org.slf4j.LoggerFactory


class VertxVerticle : AbstractVerticle() {

  private val log = LoggerFactory.getLogger(this::class.java)

  override fun start(startPromise: Promise<Void>?) {
    val httpServer = vertx.createHttpServer()
    val router = Router.router(vertx)

    router.get("/test/vertx/cpu/1").handler { ctx ->
      vertx.eventBus().request<JsonObject>(
        "test.vertx.cpu.1",
        JsonObject().put("round", ctx.queryParam("round")[0].toInt())
      ).onComplete { reply ->
        if (reply.succeeded()) {
          ctx.response().putHeader("Content-Type", "application/json")
          ctx.response().end(reply.result().body().encode())
        } else {
          log.error(reply.cause().message, reply.cause())
          ctx.response().setStatusCode(500).end(reply.cause().message)
        }
      }
    }

    router.get("/test/vertx/network/1").handler { ctx ->
      vertx.eventBus().request<JsonObject>(
        "test.vertx.network.1",
        JsonObject()
          .put("time1", ctx.queryParam("time1")[0].toLong())
          .put("time2", ctx.queryParam("time2")[0].toLong())
          .put("time3", ctx.queryParam("time3")[0].toLong())
      ).onComplete { reply ->
        if (reply.succeeded()) {
          ctx.response().putHeader("Content-Type", "application/json")
          ctx.response().end(reply.result().body().encode())
        } else {
          log.error(reply.cause().message, reply.cause())
          ctx.response().setStatusCode(500).end(reply.cause().message)
        }
      }
    }

    router.get("/test/vertx/network/2").handler { ctx ->
      vertx.eventBus().request<JsonObject>(
        "test.vertx.network.2",
        JsonObject()
          .put("time1", ctx.queryParam("time1")[0].toLong())
          .put("time2", ctx.queryParam("time2")[0].toLong())
          .put("delta1", ctx.queryParam("delta1")[0].toLong())
          .put("delta2", ctx.queryParam("delta2")[0].toLong())
      ).onComplete { reply ->
        if (reply.succeeded()) {
          ctx.response().putHeader("Content-Type", "application/json")
          ctx.response().end(reply.result().body().encode())
        } else {
          log.error(reply.cause().message, reply.cause())
          ctx.response().setStatusCode(500).end(reply.cause().message)
        }
      }
    }

    router.get("/test/vertx/disk/1").handler { ctx ->
      vertx.eventBus().request<JsonObject>(
        "test.vertx.disk.1",
        JsonObject()
      ).onComplete { reply ->
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

    vertx.deployVerticle(
      "com.example.demo.vertx.ServiceVerticle",
      DeploymentOptions()
        .setInstances(VertxOptions.DEFAULT_EVENT_LOOP_POOL_SIZE)
        .setWorker(true)
        .setWorkerPoolSize(1000)
    )
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

  vertx.deployVerticle(
    "com.example.demo.vertx.VertxVerticle",
    DeploymentOptions()
      .setInstances(VertxOptions.DEFAULT_EVENT_LOOP_POOL_SIZE)
  )
}
