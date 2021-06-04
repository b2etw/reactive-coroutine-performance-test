package com.example.demo.spring.mvc.service.cpu

import at.favre.lib.crypto.bcrypt.BCrypt
import org.springframework.stereotype.Service

@Service
class CpuCase1Service {

    fun mvc() =
        mapOf(
            "Hello World / 14" to BCrypt.withDefaults().hashToString(14, "Hello World".toCharArray())
        )
}