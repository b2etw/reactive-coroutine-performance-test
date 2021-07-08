package com.example.demo.vertx

import io.vertx.core.DeploymentOptions
import io.vertx.core.Promise
import io.vertx.core.Vertx
import io.vertx.core.VertxOptions
import io.vertx.core.json.JsonObject
import io.vertx.ext.mongo.FindOptions
import io.vertx.ext.mongo.MongoClient
import io.vertx.ext.mongo.UpdateOptions
import io.vertx.ext.web.Route
import io.vertx.ext.web.Router
import io.vertx.ext.web.RoutingContext
import io.vertx.ext.web.client.WebClient
import io.vertx.kotlin.core.json.jsonObjectOf
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
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import java.time.temporal.ChronoUnit

class CoroutineVertxVerticle : CoroutineVerticle() {

  private val log = LoggerFactory.getLogger(this::class.java)

  private val delayServiceDomain = System.getenv().getOrDefault("DELAY_SERVICE_DOMAIN", "localhost")

  private lateinit var mongoClient: MongoClient

  private val df = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm'Z'")

  override fun start(startFuture: Promise<Void>?) {
    val httpServer = vertx.createHttpServer()
    val router = Router.router(vertx)

    router.get("/test/coroutine/network/1").coroutineHandler { ctx ->
      val time1 = ctx.queryParam("time1")[0].toLong()
      val time2 = ctx.queryParam("time2")[0].toLong()
      val time3 = ctx.queryParam("time3")[0].toLong()

      val delayTime1Res = async(Dispatchers.IO) { getAwaitResponse(time1) }
      val delayTime2Res = async(Dispatchers.IO) { getAwaitResponse(time2) }
      val delayTime3Res = async(Dispatchers.IO) { getAwaitResponse(time3) }

      ctx.response().putHeader("Content-Type", "application/json")
      ctx.response().end(
        JsonObject()
          .put("delay${time1}Res", delayTime1Res.await().bodyAsJsonObject().getLong("totalTimeMillis"))
          .put("delay${time2}Res", delayTime2Res.await().bodyAsJsonObject().getLong("totalTimeMillis"))
          .put("delay${time3}Res", delayTime3Res.await().bodyAsJsonObject().getLong("totalTimeMillis"))
          .encode()
      )
    }

    router.get("/test/coroutine/network/2").coroutineHandler { ctx ->
      val time1 = ctx.queryParam("time1")[0].toLong()
      val time2 = ctx.queryParam("time2")[0].toLong()
      val delta1 = ctx.queryParam("delta1")[0].toLong()
      val delta2 = ctx.queryParam("delta2")[0].toLong()

      val delayTime1Res = async(Dispatchers.IO) { getAwaitResponse(time1) }
      val delayTime2Res = async(Dispatchers.IO) { getAwaitResponse(time2) }
      val period1 = delayTime1Res.await().bodyAsJsonObject().getLong("totalTimeMillis") +
        delayTime2Res.await().bodyAsJsonObject().getLong("totalTimeMillis")

      val delayTime3Res = async(Dispatchers.IO) { getAwaitResponse(period1) }

      val period2 = delayTime3Res.await().bodyAsJsonObject().getLong("totalTimeMillis")
      val delayTime4Res = async(Dispatchers.IO) { getAwaitResponse(period2 + delta1) }
      val delayTime5Res = async(Dispatchers.IO) { getAwaitResponse(period2 + delta2) }

      ctx.response().putHeader("Content-Type", "application/json")
      ctx.response().end(
        JsonObject()
          .put("delay${time1}Res", delayTime1Res.await().bodyAsJsonObject().getLong("totalTimeMillis"))
          .put("delay${time2}Res", delayTime2Res.await().bodyAsJsonObject().getLong("totalTimeMillis"))
          .put("delay${time1 + time2}Res", delayTime3Res.await().bodyAsJsonObject().getLong("totalTimeMillis"))
          .put("delay${time1 + time2 + delta1}Res", delayTime4Res.await().bodyAsJsonObject().getLong("totalTimeMillis"))
          .put("delay${time1 + time2 + delta2}Res", delayTime5Res.await().bodyAsJsonObject().getLong("totalTimeMillis"))
          .encode()
      )
    }

    mongoClient = MongoClient.createShared(
      vertx,
      jsonObjectOf(
        "connection_string" to "mongodb://localhost:27017",
        "authSource" to "admin",
        "db_name" to "test",
        "username" to "root",
        "password" to "rootroot"
      )
    )

    router.get("/test/coroutine/disk/1").coroutineHandler { ctx ->
      val result = mongoClient.findOneAndUpdateWithOptions(
        "demo-vertx-coroutine",
        jsonObjectOf(
          "date" to jsonObjectOf("\$date" to df.format(LocalDateTime.now().truncatedTo(ChronoUnit.HOURS)))
        ),
        jsonObjectOf("\$inc" to jsonObjectOf("count" to 1L)),
        FindOptions(),
        UpdateOptions().setUpsert(true).setReturningNewDocument(true)
      ).await()

      ctx.response().putHeader("Content-Type", "application/json")
      ctx.response().end(
        JsonObject()
          .put("result", result)
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

data class User(val id: String?, val age: Int)

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
    "com.example.demo.vertx.CoroutineVertxVerticle",
    DeploymentOptions()
      .setInstances(VertxOptions.DEFAULT_EVENT_LOOP_POOL_SIZE)
  )
}
