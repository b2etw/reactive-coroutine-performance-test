package com.example.demo.mock.web.controller

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.time.LocalDateTime
import java.util.concurrent.TimeUnit

@RestController
@RequestMapping("/mock")
class MockController {

    @GetMapping("/delay/{seconds}")
    fun mockDelay(@PathVariable seconds: Long) =
        run {
            val start = LocalDateTime.now()
            TimeUnit.SECONDS.sleep(seconds)
            val end = LocalDateTime.now()
            ResponseEntity.ok("$start / $end")
        }
}