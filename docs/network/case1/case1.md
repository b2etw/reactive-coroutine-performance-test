# Case 1, Network IO
* build a delay service which will return {time} ms with /delay/ms/{time} endpoint
* the target server will invoke delay endpoint and return

# Environment
* AWS t2.xlarge (4core 16g) -> Docker, Spring Web MVC, Spring Web MVC Async
* AWS t2.xlarge (4core 16g) -> Docker, Spring Web Flux, Spring Web Flux Coroutine
* AWS t2.xlarge (4core 16g) -> Docker, Vert.x Verticle
* AWS t2.xlarge (4core 16g) -> Docker, Vert.x Coroutine Verticle
* AWS t2.xlarge (4core 16g) -> Docker, Ktor
* AWS t2.2xlarge (8core 32g)

# Context
* target server receive request and invokes /delay/ms/500, /delay/ms/800, /delay/ms/1000 endpoints concurrently then return
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

# [Spring Web](https://b2etw.github.io/reactive-coroutine-performance-test/network/case1/network_spring_mvc_case_1/index.html)

# [Spring Reactive Web](https://b2etw.github.io/reactive-coroutine-performance-test/network/case1/network_spring_flux_case_1/index.html)

# [Spring Web](https://b2etw.github.io/reactive-coroutine-performance-test/network/case1/network_spring_mvc_case_1/index.html)

# [Spring Reactive Web](https://b2etw.github.io/reactive-coroutine-performance-test/network/case1/network_spring_flux_case_1/index.html)

# [Vert.x](https://b2etw.github.io/reactive-coroutine-performance-test/network/case1/network_vertx_vertx_case_1/index.html)

# [Vert.x](https://b2etw.github.io/reactive-coroutine-performance-test/network/case1/network_vertx_vertx_case_1/index.html)

# [Ktor](https://b2etw.github.io/reactive-coroutine-performance-test/network/case1/network_ktor_ktor_case_1/index.html)