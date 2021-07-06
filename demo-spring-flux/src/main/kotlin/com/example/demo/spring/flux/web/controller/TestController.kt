package com.example.demo.spring.flux.web.controller

import com.example.demo.spring.flux.service.cpu.CpuCase1Service
import com.example.demo.spring.flux.service.disk.DiskCase1Service
import com.example.demo.spring.flux.service.disk.User
import com.example.demo.spring.flux.service.network.NetworkCase1Service
import com.example.demo.spring.flux.service.network.NetworkCase2Service
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/test")
class TestController(
    val cpuCase1Service: CpuCase1Service,
    val networkCase1Service: NetworkCase1Service,
    val networkCase2Service: NetworkCase2Service,
    val diskCase1Service: DiskCase1Service
) {

    @GetMapping("/flux/cpu/1")
    fun fluxCpu1(
        @RequestParam round: Int
    ) = cpuCase1Service.flux(round)

    @GetMapping("/flux/network/1")
    fun fluxNetwork1(
        @RequestParam time1: Long,
        @RequestParam time2: Long,
        @RequestParam time3: Long
    ) = networkCase1Service.flux(time1, time2, time3)

    @GetMapping("/flux/network/2")
    fun fluxNetwork2(
        @RequestParam time1: Long,
        @RequestParam time2: Long,
        @RequestParam delta1: Long,
        @RequestParam delta2: Long
    ) = networkCase2Service.flux(time1, time2, delta1, delta2)

    @PostMapping("/flux/disk/1")
    fun fluxDisk1() = diskCase1Service.flux()

    @GetMapping("/coroutine/network/1")
    suspend fun coroutineNetwork1(
        @RequestParam time1: Long,
        @RequestParam time2: Long,
        @RequestParam time3: Long
    ) = networkCase1Service.coroutine(time1, time2, time3)

    @GetMapping("/coroutine/network/2")
    suspend fun coroutineNetwork2(
        @RequestParam time1: Long,
        @RequestParam time2: Long,
        @RequestParam delta1: Long,
        @RequestParam delta2: Long
    ) = networkCase2Service.coroutine(time1, time2, delta1, delta2)

    @PostMapping("/coroutine/disk/1")
    suspend fun coroutineDisk1() = diskCase1Service.coroutine()
}