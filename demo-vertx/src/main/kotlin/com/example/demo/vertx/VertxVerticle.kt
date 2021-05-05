package com.example.demo.vertx

import io.vertx.core.AbstractVerticle
import io.vertx.core.DeploymentOptions
import io.vertx.core.Promise
import io.vertx.core.Vertx
import io.vertx.ext.web.Router
import org.slf4j.LoggerFactory


class VertxVerticle : AbstractVerticle() {

  private val log = LoggerFactory.getLogger(this::class.java)

  override fun start(startPromise: Promise<Void>?) {
    val httpServer = vertx.createHttpServer()
    val router = Router.router(vertx)

    router.get("/test/vertx").handler { ctx ->
      vertx.eventBus().request<String>("test", "").onComplete { reply ->
        if (reply.succeeded()) {
          ctx.response().putHeader("Content-type", "application/json")
          ctx.response().end(reply.result().body())
        } else {
          log.error(reply.cause().message, reply.cause())
          ctx.response().setStatusCode(500).end(reply.cause().message)
        }
      }
    }

    httpServer
      .requestHandler(router)
      .listen(8088) {
        log.info("HTTP server started on port 8088 succeeded: ${it.succeeded()}")
      }

    vertx.deployVerticle(TestVerticle(), DeploymentOptions().setWorker(true).setWorkerPoolSize(1000))
  }
}

fun main() {
  Vertx.vertx().deployVerticle(VertxVerticle())
}
