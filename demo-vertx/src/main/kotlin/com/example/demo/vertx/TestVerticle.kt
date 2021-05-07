package com.example.demo.vertx

import io.vertx.core.AbstractVerticle
import io.vertx.core.CompositeFuture
import io.vertx.core.Promise
import io.vertx.core.buffer.Buffer
import io.vertx.ext.web.client.HttpResponse
import io.vertx.ext.web.client.WebClient
import org.slf4j.LoggerFactory


class TestVerticle : AbstractVerticle() {

  private val log = LoggerFactory.getLogger(this::class.java)

  override fun start(startPromise: Promise<Void>?) {
    val delayServiceDomain = System.getenv().getOrDefault("DELAY_SERVICE_DOMAIN", "localhost")

    vertx.eventBus().consumer<String>("test") {
      val delay1000req = getResponse(delayServiceDomain, 1000)
      val delay800req = getResponse(delayServiceDomain, 800)
      val delay500req = getResponse(delayServiceDomain, 500)
      CompositeFuture.all(delay1000req, delay800req, delay500req).onComplete { res ->
        if (res.succeeded()) {
          val resultAt0 = res.result().resultAt<HttpResponse<Buffer>>(0)
          val resultAt1 = res.result().resultAt<HttpResponse<Buffer>>(1)
          val resultAt2 = res.result().resultAt<HttpResponse<Buffer>>(2)
          it.reply("${resultAt0.bodyAsString()} / ${resultAt1.bodyAsString()} / ${resultAt2.bodyAsString()}")
        } else {
          log.error(res.cause().message, res.cause())
        }
      }
    }
  }

  private fun getResponse(delayServiceDomain: String, ms: Long) =
    run {
      WebClient.create(vertx)
        .get(8888, delayServiceDomain, "/delay/ms/$ms")
        .putHeader("Accept", "application/json")
        .send()
    }
}
