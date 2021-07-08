package com.example.demo.spring.flux.service.disk

import com.mongodb.client.model.Filters
import com.mongodb.client.model.FindOneAndUpdateOptions
import com.mongodb.client.model.ReturnDocument
import com.mongodb.client.model.Updates
import kotlinx.coroutines.reactive.awaitSingle
import org.springframework.data.mongodb.core.ReactiveMongoTemplate
import org.springframework.stereotype.Service
import reactor.kotlin.core.publisher.toMono
import java.time.LocalDateTime
import java.time.temporal.ChronoUnit

@Service
class DiskCase1Service(
    val reactiveMongoTemplate: ReactiveMongoTemplate
) {

    fun flux() = reactiveMongoTemplate.getCollection("demo-spring-flux")
        .flatMap {
            it.findOneAndUpdate(
                Filters.eq("hour", LocalDateTime.now().truncatedTo(ChronoUnit.HOURS)),
                Updates.inc("count", 1L),
                FindOneAndUpdateOptions().upsert(true).returnDocument(ReturnDocument.AFTER)
            ).toMono()
        }

    suspend fun coroutine() = reactiveMongoTemplate.getCollection("demo-spring-coroutine")
        .flatMap {
            it.findOneAndUpdate(
                Filters.eq("hour", LocalDateTime.now().truncatedTo(ChronoUnit.HOURS)),
                Updates.inc("count", 1L),
                FindOneAndUpdateOptions().upsert(true).returnDocument(ReturnDocument.AFTER)
            ).toMono()
        }.awaitSingle()
}