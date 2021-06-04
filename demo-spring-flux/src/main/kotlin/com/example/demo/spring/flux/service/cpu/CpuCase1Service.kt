package com.example.demo.spring.flux.service.cpu

import at.favre.lib.crypto.bcrypt.BCrypt
import org.springframework.stereotype.Service
import reactor.core.publisher.Mono

@Service
class CpuCase1Service {

    fun flux() =
        Mono.just(
            mapOf(
                "Hello World / 14" to BCrypt.withDefaults().hashToString(14, "Hello World".toCharArray())
            )
        )
}