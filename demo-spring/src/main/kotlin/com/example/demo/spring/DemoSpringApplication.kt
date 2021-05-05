package com.example.demo.spring

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class DemoSpringApplication

fun main(args: Array<String>) {
    runApplication<DemoSpringApplication>(*args)
}
