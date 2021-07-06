package com.example.demo.spring.flux.service.disk

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document
data class User(

    @Id
    val id: String?,

    val age: Int
)
