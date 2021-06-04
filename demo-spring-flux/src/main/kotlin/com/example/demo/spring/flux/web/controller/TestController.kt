package com.example.demo.spring.flux.web.controller

import com.example.demo.spring.flux.service.cpu.CpuCase1Service
import com.example.demo.spring.flux.service.network.NetworkCase1Service
import com.example.demo.spring.flux.service.network.NetworkCase2Service
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

    @GetMapping("/flux/cpu/1")
    fun fluxCpu1() = cpuCase1Service.flux()

    @GetMapping("/flux/network/1")
    fun fluxNetwork1() = networkCase1Service.flux()

    @GetMapping("/flux/network/2")
    fun fluxNetwork2() = networkCase2Service.flux()

    @GetMapping("/coroutine/network/1")
    suspend fun coroutineNetwork1() = networkCase1Service.coroutine()

    @GetMapping("/coroutine/network/2")
    suspend fun coroutineNetwork2() = networkCase2Service.coroutine()
}