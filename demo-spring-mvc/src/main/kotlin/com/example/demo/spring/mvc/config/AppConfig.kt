package com.example.demo.spring.mvc.config

import io.netty.channel.nio.NioEventLoopGroup
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.http.client.reactive.ReactorClientHttpConnector
import org.springframework.http.client.reactive.ReactorResourceFactory
import org.springframework.web.reactive.function.client.WebClient
import reactor.netty.http.client.HttpClient
import reactor.netty.resources.ConnectionProvider
import reactor.netty.resources.LoopResources
import java.util.concurrent.LinkedBlockingQueue
import java.util.concurrent.ThreadPoolExecutor
import java.util.concurrent.TimeUnit

@Configuration
class AppConfig {

    @Bean
    fun webClient() =
        ThreadPoolExecutor(
            100,
            1000,
            60,
            TimeUnit.SECONDS,
            LinkedBlockingQueue(1000)
        ).let {
            val nioEventLoopGroup = NioEventLoopGroup(100, it)
            ReactorResourceFactory()
                .apply {
                    this.connectionProvider = ConnectionProvider.create("default")
                    this.loopResources = LoopResources { nioEventLoopGroup }
                }
        }.let {
            ReactorClientHttpConnector(it) { m: HttpClient -> m }
        }.let {
            WebClient.builder()
                .clientConnector(it)
                .build()
        }
}