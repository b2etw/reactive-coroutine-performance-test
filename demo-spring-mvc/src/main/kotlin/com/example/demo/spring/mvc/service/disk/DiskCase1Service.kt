package com.example.demo.spring.mvc.service.disk

import org.springframework.data.mongodb.core.ReactiveMongoTemplate
import org.springframework.stereotype.Service
import kotlin.random.Random

@Service
class DiskCase1Service(
    val reactiveMongoTemplate: ReactiveMongoTemplate
) {

    private val random = Random(System.currentTimeMillis())

    fun mvc() = reactiveMongoTemplate.save(User(null, random.nextInt(20, 80))).block()

    fun async() = reactiveMongoTemplate.save(User(null, random.nextInt(20, 80))).toFuture()
}
