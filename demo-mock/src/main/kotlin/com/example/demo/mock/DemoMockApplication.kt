package com.example.demo.mock

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class DemoMockApplication

fun main(args: Array<String>) {
    runApplication<DemoMockApplication>(*args)
}
