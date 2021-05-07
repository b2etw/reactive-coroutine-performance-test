package com.example.demo.delay.service.web.controller

import org.springframework.http.ResponseEntity
import org.springframework.util.StopWatch
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.util.concurrent.TimeUnit

@RestController
@RequestMapping("/delay")
class DelayController {

    @GetMapping("/ms/{ms}")
    fun mockDelayMilliSeconds(@PathVariable ms: Long) =
        run {
            val sw = StopWatch()
            sw.start()
            TimeUnit.MILLISECONDS.sleep(ms)
            sw.stop()
            ResponseEntity.ok(sw.totalTimeMillis)
        }
}