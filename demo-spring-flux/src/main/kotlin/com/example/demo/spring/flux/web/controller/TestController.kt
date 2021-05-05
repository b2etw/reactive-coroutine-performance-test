package com.example.demo.spring.flux.web.controller

import com.example.demo.spring.flux.service.TestService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/test")
class TestController(
    val testService: TestService
) {

    @GetMapping("/flux")
    fun flux() = testService.flux()

    @GetMapping("/coroutine")
    suspend fun coroutine() = testService.coroutine()
}