# CPU, Case 1
* process bcrypt hashing with **cost factor 11**

# Environment
* AWS t2.xlarge (4core 16g) -> Docker, Spring Web
* AWS t2.xlarge (4core 16g) -> Docker, Spring Reactive Web
* AWS t2.xlarge (4core 16g) -> Docker, Vert.x
* AWS t2.xlarge (4core 16g) -> Docker, Ktor
* AWS t2.2xlarge (8core 32g) -> openjdk-11-jdk, Apache-JMeter-5.4.1)

# Context
* jmeter use constant throughput timer to keep **20 RPS**

# Procedure
* warm twice and hit once

# [Spring Web](https://b2etw.github.io/reactive-coroutine-performance-test/cpu/cpu_spring_mvc_case_1/index.html)
![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/docs/cpu/case1/cpu_mvc_case_1.png)

# [Spring Reactive Web](https://b2etw.github.io/reactive-coroutine-performance-test/cpu/cpu_spring_flux_case_1/index.html)
![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/docs/cpu/case1/cpu_flux_case_1.png)

# [Vert.x](https://b2etw.github.io/reactive-coroutine-performance-test/cpu/cpu_vertx_vertx_case_1/index.html)
![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/docs/cpu/case1/cpu_vertx_case_1.png)
```kotlin
vertx.deployVerticle("com.example.demo.vertx.VertxVerticle", DeploymentOptions().setInstances(VertxOptions.DEFAULT_EVENT_LOOP_POOL_SIZE))
```

# [Ktor](https://b2etw.github.io/reactive-coroutine-performance-test/cpu/cpu_ktor_ktor_case_1/index.html)
![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/docs/cpu/case1/cpu_ktor_case_1.png)
