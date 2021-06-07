package com.example.demo.spring.flux.service.cpu

import at.favre.lib.crypto.bcrypt.BCrypt
import org.springframework.stereotype.Service
import reactor.core.publisher.Mono

@Service
class CpuCase1Service {

    fun flux(round: Int) =
        Mono.just(
            mapOf(
                "Hello World / $round" to BCrypt.withDefaults().hashToString(round, "Hello World".toCharArray())
            )
        )
}