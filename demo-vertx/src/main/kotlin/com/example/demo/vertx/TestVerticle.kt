package com.example.demo.vertx

import io.vertx.core.AbstractVerticle
import io.vertx.core.CompositeFuture.all
import io.vertx.core.Promise
import io.vertx.core.buffer.Buffer
import io.vertx.core.json.JsonObject
import io.vertx.ext.web.client.HttpResponse
import io.vertx.ext.web.client.WebClient
import io.vertx.kotlin.core.json.get


class TestVerticle : AbstractVerticle() {

  val delayServiceDomain = System.getenv().getOrDefault("DELAY_SERVICE_DOMAIN", "localhost")

  override fun start(startPromise: Promise<Void>?) {
    vertx.eventBus().consumer<JsonObject>("test") {
      val resultJson = JsonObject()
      all(getFutureResponse(100), getFutureResponse(200))
        .compose { res ->
          val t1 = res.result().resultAt<HttpResponse<Buffer>>(0).bodyAsJsonObject().get<Long>("totalTimeMillis")
          val t2 = res.result().resultAt<HttpResponse<Buffer>>(1).bodyAsJsonObject().get<Long>("totalTimeMillis")
          resultJson.put("delay100res", t1)
          resultJson.put("delay200res", t2)

          getFutureResponse(t1 + t2)
        }.compose { res ->
          val t3 = res.bodyAsJsonObject().get<Long>("totalTimeMillis")
          resultJson.put("delay300res", t3)

          all(getFutureResponse(t3 + 100), getFutureResponse(t3 + 200))
        }.onSuccess { res ->
          val t4 = res.result().resultAt<HttpResponse<Buffer>>(0).bodyAsJsonObject().get<Long>("totalTimeMillis")
          val t5 = res.result().resultAt<HttpResponse<Buffer>>(1).bodyAsJsonObject().get<Long>("totalTimeMillis")
          resultJson.put("delay400res", t4)
          resultJson.put("delay500res", t5)

          it.reply(resultJson)
        }
    }
  }

  private fun getFutureResponse(ms: Long) =
    WebClient.create(vertx)
      .get(8888, delayServiceDomain, "/delay/ms/$ms")
      .send()
}
