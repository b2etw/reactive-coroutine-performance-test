# Case 1, CPU
* process bcrypt hashing

# Environment, AWS t2.xlarge (4core 16g)

# Context
* jmeter use constant throughput timer to keep 20 RPS

# Procedure
* warm twice and hit three times

# Spring Web
* [cpu_mvc_case_1_1](https://b2etw.github.io/reactive-coroutine-performance-test/cpu/cpu_mvc_case_1_1/index.html)
* [cpu_mvc_case_1_2](https://b2etw.github.io/reactive-coroutine-performance-test/cpu/cpu_mvc_case_1_2/index.html)
* [cpu_mvc_case_1_3](https://b2etw.github.io/reactive-coroutine-performance-test/cpu/cpu_mvc_case_1_3/index.html)
* ![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/docs/cpu/cpu_mvc_case_1.png)

# Spring Reactive Web
* [cpu_flux_case_1_1](https://b2etw.github.io/reactive-coroutine-performance-test/cpu/cpu_flux_case_1_1/index.html)
* [cpu_flux_case_1_2](https://b2etw.github.io/reactive-coroutine-performance-test/cpu/cpu_flux_case_1_2/index.html)
* [cpu_flux_case_1_3](https://b2etw.github.io/reactive-coroutine-performance-test/cpu/cpu_flux_case_1_3/index.html)
* ![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/docs/cpu/cpu_flux_case_1.png)

# Vert.x
```kotlin
vertx.deployVerticle("com.example.demo.vertx.VertxVerticle", DeploymentOptions().setInstances(VertxOptions.DEFAULT_EVENT_LOOP_POOL_SIZE))
```
* [cpu_vertx_case_1_1](https://b2etw.github.io/reactive-coroutine-performance-test/cpu/cpu_vertx_case_1_1/index.html)
* [cpu_vertx_case_1_2](https://b2etw.github.io/reactive-coroutine-performance-test/cpu/cpu_vertx_case_1_2/index.html)
* [cpu_vertx_case_1_3](https://b2etw.github.io/reactive-coroutine-performance-test/cpu/cpu_vertx_case_1_3/index.html)
* ![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/docs/cpu/cpu_vertx_case_1.png)

# Ktor
* [cpu_ktor_case_1_1](https://b2etw.github.io/reactive-coroutine-performance-test/cpu/cpu_ktor_case_1_1/index.html)
* [cpu_ktor_case_1_2](https://b2etw.github.io/reactive-coroutine-performance-test/cpu/cpu_ktor_case_1_2/index.html)
* [cpu_ktor_case_1_3](https://b2etw.github.io/reactive-coroutine-performance-test/cpu/cpu_ktor_case_1_3/index.html)
* ![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/docs/cpu/cpu_ktor_case_1.png)
