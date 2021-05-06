package com.example.demo.vertx

import io.vertx.core.DeploymentOptions
import io.vertx.core.Promise
import io.vertx.core.Vertx
import io.vertx.ext.web.Route
import io.vertx.ext.web.Router
import io.vertx.ext.web.RoutingContext
import io.vertx.kotlin.coroutines.CoroutineVerticle
import io.vertx.kotlin.coroutines.dispatcher
import kotlinx.coroutines.launch
import org.slf4j.LoggerFactory

class CoroutineVertxVerticle : CoroutineVerticle() {

  private val log = LoggerFactory.getLogger(this::class.java)

  override fun start(startFuture: Promise<Void>?) {
    val httpServer = vertx.createHttpServer()
    val router = Router.router(vertx)

    router.get("/test/coroutine").coroutineHandler { ctx ->
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
  Vertx.vertx().deployVerticle(CoroutineVertxVerticle())
}