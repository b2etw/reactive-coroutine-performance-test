package com.example.demo.spring.mvc.service.cpu

import at.favre.lib.crypto.bcrypt.BCrypt
import org.springframework.stereotype.Service

@Service
class CpuCase1Service {

    fun mvc(round: Int) =
        mapOf(
            "Hello World / $round" to BCrypt.withDefaults().hashToString(round, "Hello World".toCharArray())
        )
}