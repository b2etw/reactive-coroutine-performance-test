package com.example.demo.spring.flux.service.disk

import kotlinx.coroutines.reactive.awaitSingle
import org.springframework.data.mongodb.core.ReactiveMongoTemplate
import org.springframework.stereotype.Service
import kotlin.random.Random

@Service
class DiskCase1Service(
    val reactiveMongoTemplate: ReactiveMongoTemplate
) {

    private val random = Random(System.currentTimeMillis())

    fun flux() = reactiveMongoTemplate.save(User(null, random.nextInt(20, 80)))

    suspend fun coroutine() = reactiveMongoTemplate.save(User(null, random.nextInt(20, 80))).awaitSingle()
}