package com.example.demo.delay.service.web

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import reactor.core.publisher.Mono
import reactor.core.scheduler.Schedulers
import java.time.Duration
import java.util.concurrent.LinkedBlockingQueue
import java.util.concurrent.ThreadPoolExecutor
import java.util.concurrent.TimeUnit

@RestController
@RequestMapping("/delay")
class DelayController {

    val scheduler = Schedulers.fromExecutor(
        ThreadPoolExecutor(
            100,
            1000,
            60,
            TimeUnit.SECONDS,
            LinkedBlockingQueue(1000)
        )
    )

    @GetMapping("/ms/{ms}")
    fun mockDelayMilliSeconds(@PathVariable ms: Long) =
        Mono.just(mapOf("totalTimeMillis" to ms))
            .publishOn(scheduler)
            .delayElement(Duration.ofMillis(ms))
}