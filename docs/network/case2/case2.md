# Case 1, Network IO
* build a delay service which will return {time} ms with /delay/ms/{time} endpoint
* the target server will invoke delay endpoint and return

# Environment
* AWS t2.xlarge (4core 16g) -> Docker, Spring Web, Spring Web Async
* AWS t2.xlarge (4core 16g) -> Docker, Spring Reactive Web, Spring Reactive Web Coroutine
* AWS t2.xlarge (4core 16g) -> Docker, Vert.x Verticle
* AWS t2.xlarge (4core 16g) -> Docker, Vert.x Coroutine Verticle
* AWS t2.xlarge (4core 16g) -> Docker, Ktor
* AWS t2.2xlarge (8core 32g) -> openjdk-11-jdk, Apache-JMeter-5.4.1

# Context
* target server receive request and invokes these endpoints by following steps
  * invoke /delay/ms/100, /delay/ms/200 concurrently
  * wait first two result and invoke /delay/ms/300
  * wait third result and invoke /delay/ms/400, /delay/ms/500 concurrently
* jmeter use constant throughput timer to keep **20 RPS**
* for demo-delay-service
```
server.tomcat.threads.max=800
``` 
* for demo-spring-mvc
```
server.tomcat.threads.max=800
``` 
* for demo-spring-flux
```shell
-Dreactor.netty.ioWorkerCount=1000 -Dreactor.netty.pool.maxConnections=8192
```
* for demo-vertx
```kotlin
vertx.deployVerticle(
    "com.example.demo.vertx.VertxVerticle",
    DeploymentOptions().setInstances(VertxOptions.DEFAULT_EVENT_LOOP_POOL_SIZE)
)

vertx.deployVerticle(
  "com.example.demo.vertx.ServiceVerticle", 
  DeploymentOptions()
    .setInstances(VertxOptions.DEFAULT_EVENT_LOOP_POOL_SIZE)
    .setWorker(true)
    .setWorkerPoolSize(1000)
)
```
* for demo-ktor
```
ktor {
    deployment {
        callGroupSize = 1000
        connectionGroupSize = 1000
        workerGroupSize = 1000
    }
}
```

# Procedure
* Warm twice and hit one once

# [Spring Web](https://b2etw.github.io/reactive-coroutine-performance-test/network/case2/network_spring_mvc_case_2/index.html)

# [Spring Web Async](https://b2etw.github.io/reactive-coroutine-performance-test/network/case2/network_spring_flux_case_2/index.html)

# [Spring Reactive Web](https://b2etw.github.io/reactive-coroutine-performance-test/network/case2/network_spring_mvc_case_2/index.html)

# [Spring Reactive Web Coroutine](https://b2etw.github.io/reactive-coroutine-performance-test/network/case2/network_spring_flux_case_2/index.html)

# [Vert.x](https://b2etw.github.io/reactive-coroutine-performance-test/network/case2/network_vertx_vertx_case_2/index.html)

# [Vert.x Coroutine](https://b2etw.github.io/reactive-coroutine-performance-test/network/case2/network_vertx_vertx_case_2/index.html)

# [Ktor](https://b2etw.github.io/reactive-coroutine-performance-test/network/case2/network_ktor_ktor_case_2/index.html)