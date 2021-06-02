package com.example.demo.delay.service.web

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import reactor.core.publisher.Mono
import java.time.Duration

@RestController
@RequestMapping("/delay")
class DelayController {

    @GetMapping("/ms/{ms}")
    fun mockDelayMilliSeconds(@PathVariable ms: Long) =
        Mono.just(mapOf("totalTimeMillis" to ms))
            .delayElement(Duration.ofSeconds(1))
}