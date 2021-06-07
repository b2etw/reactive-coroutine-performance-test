package com.example.demo.spring.mvc.web.controller

import com.example.demo.spring.mvc.service.cpu.CpuCase1Service
import com.example.demo.spring.mvc.service.network.NetworkCase1Service
import com.example.demo.spring.mvc.service.network.NetworkCase2Service
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/test")
class TestController(
    val cpuCase1Service: CpuCase1Service,
    val networkCase1Service: NetworkCase1Service,
    val networkCase2Service: NetworkCase2Service
) {

    @GetMapping("/mvc/cpu/1")
    fun mvcCpu1(@RequestParam round: Int) = cpuCase1Service.mvc(round)

    @GetMapping("/mvc/network/1")
    fun mvcNetwork1(
        @RequestParam time1: Long,
        @RequestParam time2: Long,
        @RequestParam time3: Long
    ) = networkCase1Service.mvc(time1, time2, time3)

    @GetMapping("/mvc/network/2")
    fun mvcNetwork2(
        @RequestParam time1: Long,
        @RequestParam time2: Long,
        @RequestParam delta1: Long,
        @RequestParam delta2: Long
    ) = networkCase2Service.mvc(time1, time2, delta1, delta2)

    @GetMapping("/async/network/1")
    fun asyncNetwork1(
        @RequestParam time1: Long,
        @RequestParam time2: Long,
        @RequestParam time3: Long
    ) = networkCase1Service.async(time1, time2, time3)

    @GetMapping("/async/network/2")
    fun asyncNetwork2(
        @RequestParam time1: Long,
        @RequestParam time2: Long,
        @RequestParam delta1: Long,
        @RequestParam delta2: Long
    ) = networkCase2Service.async(time1, time2, delta1, delta2)
}