package com.example.demo.spring.mvc.web.controller

import com.example.demo.spring.mvc.service.cpu.CpuCase1Service
import com.example.demo.spring.mvc.service.network.NetworkCase1Service
import com.example.demo.spring.mvc.service.network.NetworkCase2Service
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/test")
class TestController(
    val cpuCase1Service: CpuCase1Service,
    val networkCase1Service: NetworkCase1Service,
    val networkCase2Service: NetworkCase2Service
) {

    @GetMapping("/mvc/cpu/1")
    fun mvcCpu1() = cpuCase1Service.mvc()

    @GetMapping("/mvc/network/1")
    fun mvcNetwork1() = networkCase1Service.mvc()

    @GetMapping("/mvc/network/2")
    fun mvcNetwork2() = networkCase2Service.mvc()

    @GetMapping("/async/network/1")
    fun asyncNetwork1() = networkCase1Service.async()

    @GetMapping("/async/network/2")
    fun asyncNetwork2() = networkCase2Service.async()
}