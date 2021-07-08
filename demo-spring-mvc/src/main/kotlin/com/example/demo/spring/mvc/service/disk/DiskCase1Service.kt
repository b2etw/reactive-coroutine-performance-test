package com.example.demo.spring.mvc.service.disk

import com.mongodb.client.model.Filters
import com.mongodb.client.model.FindOneAndUpdateOptions
import com.mongodb.client.model.ReturnDocument
import com.mongodb.client.model.Updates
import org.springframework.data.mongodb.core.ReactiveMongoTemplate
import org.springframework.stereotype.Service
import reactor.core.publisher.toMono
import java.time.LocalDateTime
import java.time.temporal.ChronoUnit

@Service
class DiskCase1Service(
    val reactiveMongoTemplate: ReactiveMongoTemplate
) {

    fun mvc() = reactiveMongoTemplate.getCollection("demo-spring-mvc")
        .flatMap {
            it.findOneAndUpdate(
                Filters.eq("hour", LocalDateTime.now().truncatedTo(ChronoUnit.HOURS)),
                Updates.inc("count", 1L),
                FindOneAndUpdateOptions().upsert(true).returnDocument(ReturnDocument.AFTER)
            ).toMono()
        }.block()

    fun async() = reactiveMongoTemplate.getCollection("demo-spring-async")
        .flatMap {
            it.findOneAndUpdate(
                Filters.eq("hour", LocalDateTime.now().truncatedTo(ChronoUnit.HOURS)),
                Updates.inc("count", 1L),
                FindOneAndUpdateOptions().upsert(true).returnDocument(ReturnDocument.AFTER)
            ).toMono()
        }.toFuture()
}
