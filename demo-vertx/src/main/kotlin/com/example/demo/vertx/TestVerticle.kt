package com.example.demo.vertx

import io.vertx.core.AbstractVerticle
import io.vertx.core.Promise
import io.vertx.ext.web.client.WebClient
import io.vertx.ext.web.codec.BodyCodec
import org.slf4j.LoggerFactory


class TestVerticle : AbstractVerticle() {

  private val log = LoggerFactory.getLogger(this::class.java)

  override fun start(startPromise: Promise<Void>?) {
    vertx.eventBus().consumer<String>("test") {
      WebClient.create(vertx)
        .get(8888, "192.168.1.140", "/mock/delay/1")
        .putHeader("Accept", "application/json")
        .send()
        .onComplete { res ->
          if (res.succeeded()) {
            it.reply(res.result().bodyAsString())
          } else {
            log.error(res.cause().message, res.cause())
          }
        }
    }
  }
}
