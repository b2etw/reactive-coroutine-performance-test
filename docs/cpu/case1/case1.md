# Case 1, CPU
* process bcrypt hashing with cost factor 11

# Environment, AWS t2.xlarge (4core 16g)

# Context
* jmeter use constant throughput timer to keep 20 RPS

# Procedure
* warm twice and hit once

# [Spring Web](https://b2etw.github.io/reactive-coroutine-performance-test/cpu/cpu_spring_mvc_case_1/index.html)

# [Spring Reactive Web](https://b2etw.github.io/reactive-coroutine-performance-test/cpu/cpu_spring_flux_case_1/index.html)

# [Vert.x](https://b2etw.github.io/reactive-coroutine-performance-test/cpu/cpu_vertx_vertx_case_1/index.html)
```kotlin
vertx.deployVerticle("com.example.demo.vertx.VertxVerticle", DeploymentOptions().setInstances(VertxOptions.DEFAULT_EVENT_LOOP_POOL_SIZE))
```

# [Ktor](https://b2etw.github.io/reactive-coroutine-performance-test/cpu/cpu_ktor_ktor_case_1/index.html)
