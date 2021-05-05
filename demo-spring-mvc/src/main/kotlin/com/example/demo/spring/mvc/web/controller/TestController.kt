package com.example.demo.spring.mvc.web.controller

import com.example.demo.spring.mvc.service.TestService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/test")
class TestController(
    val testService: TestService
) {

    @GetMapping("/mvc")
    fun mvc() = testService.mvc()

    @GetMapping("/async")
    fun async() = testService.async()
}