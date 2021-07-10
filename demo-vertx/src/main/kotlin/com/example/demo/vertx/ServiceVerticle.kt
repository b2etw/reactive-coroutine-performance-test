package com.example.demo.vertx

import at.favre.lib.crypto.bcrypt.BCrypt
import io.vertx.core.AbstractVerticle
import io.vertx.core.CompositeFuture.all
import io.vertx.core.Promise
import io.vertx.core.buffer.Buffer
import io.vertx.core.json.JsonObject
import io.vertx.ext.mongo.FindOptions
import io.vertx.ext.mongo.MongoClient
import io.vertx.ext.mongo.UpdateOptions
import io.vertx.ext.web.client.HttpResponse
import io.vertx.ext.web.client.WebClient
import io.vertx.kotlin.core.json.get
import io.vertx.kotlin.core.json.jsonObjectOf
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import java.time.temporal.ChronoUnit


class ServiceVerticle : AbstractVerticle() {

  private val delayServiceDomain = System.getenv().getOrDefault("DELAY_SERVICE_DOMAIN", "localhost")
  private val mongoDbDomain = System.getenv().getOrDefault("MONGODB_DOMAIN", "localhost")

  private lateinit var mongoClient: MongoClient

  private val df = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm'Z'")

  override fun start(startPromise: Promise<Void>?) {
    vertx.eventBus().consumer<JsonObject>("test.vertx.cpu.1") {
      val round = it.body().get<Int>("round")
      it.reply(
        JsonObject(
          mapOf(
            "Hello World / $round" to BCrypt.withDefaults().hashToString(round, "Hello World".toCharArray())
          )
        )
      )
    }

    vertx.eventBus().consumer<JsonObject>("test.vertx.network.1") {
      val time1 = it.body().get<Long>("time1")
      val time2 = it.body().get<Long>("time2")
      val time3 = it.body().get<Long>("time3")
      all(getFutureResponse(time1), getFutureResponse(time2), getFutureResponse(time3))
        .onSuccess { res ->
          val delayTime1Res =
            res.result().resultAt<HttpResponse<Buffer>>(0).bodyAsJsonObject().get<Long>("totalTimeMillis")
          val delayTime2Res =
            res.result().resultAt<HttpResponse<Buffer>>(1).bodyAsJsonObject().get<Long>("totalTimeMillis")
          val delayTime3Res =
            res.result().resultAt<HttpResponse<Buffer>>(2).bodyAsJsonObject().get<Long>("totalTimeMillis")

          it.reply(
            JsonObject(
              mapOf(
                "delay${time1}Res" to delayTime1Res,
                "delay${time2}Res" to delayTime2Res,
                "delay${time3}Res" to delayTime3Res
              )
            )
          )
        }
    }

    vertx.eventBus().consumer<JsonObject>("test.vertx.network.2") {
      val time1 = it.body().get<Long>("time1")
      val time2 = it.body().get<Long>("time2")
      val delta1 = it.body().get<Long>("delta1")
      val delta2 = it.body().get<Long>("delta2")
      val resultJson = JsonObject()
      all(getFutureResponse(time1), getFutureResponse(time2))
        .compose { res ->
          val t1 = res.result().resultAt<HttpResponse<Buffer>>(0).bodyAsJsonObject().get<Long>("totalTimeMillis")
          val t2 = res.result().resultAt<HttpResponse<Buffer>>(1).bodyAsJsonObject().get<Long>("totalTimeMillis")
          resultJson.put("delay${time1}Res", t1)
          resultJson.put("delay${time2}Res", t2)

          getFutureResponse(t1 + t2)
        }.compose { res ->
          val t3 = res.bodyAsJsonObject().get<Long>("totalTimeMillis")
          resultJson.put("delay${time1 + time2}Res", t3)

          all(getFutureResponse(t3 + delta1), getFutureResponse(t3 + delta2))
        }.onSuccess { res ->
          val t4 = res.result().resultAt<HttpResponse<Buffer>>(0).bodyAsJsonObject().get<Long>("totalTimeMillis")
          val t5 = res.result().resultAt<HttpResponse<Buffer>>(1).bodyAsJsonObject().get<Long>("totalTimeMillis")
          resultJson.put("delay${time1 + time2 + delta1}Res", t4)
          resultJson.put("delay${time1 + time2 + delta2}Res", t5)

          it.reply(resultJson)
        }
    }

    mongoClient = MongoClient.createShared(
      vertx,
      jsonObjectOf(
        "connection_string" to "mongodb://${mongoDbDomain}:27017",
        "authSource" to "admin",
        "db_name" to "test",
        "username" to "root",
        "password" to "rootroot"
      )
    )

    vertx.eventBus().consumer<JsonObject>("test.vertx.disk.1") {
      mongoClient.findOneAndUpdateWithOptions(
        "demo-vertx",
        jsonObjectOf(
          "date" to jsonObjectOf("\$date" to df.format(LocalDateTime.now().truncatedTo(ChronoUnit.HOURS)))
        ),
        jsonObjectOf("\$inc" to jsonObjectOf("count" to 1L)),
        FindOptions(),
        UpdateOptions().setUpsert(true).setReturningNewDocument(true)
      ).onSuccess { res ->
        it.reply(res)
      }
    }
  }

  private fun getFutureResponse(ms: Long) =
    WebClient.create(vertx)
      .get(8888, delayServiceDomain, "/delay/ms/$ms")
      .send()
}
