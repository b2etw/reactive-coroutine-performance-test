package com.example.demo.spring.mvc.service.disk

import org.springframework.data.mongodb.core.mapping.Document

@Document
data class User(var id: String?, var age: Int)