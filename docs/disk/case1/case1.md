# Disk IO, Case 1
* do mongodb upsert action

# Environment
* service： linode 1core 2G 
  * mongoDB on same instance
* Gating： linode 2core 4GB

# Context
* https://github.com/guyspy/reactive-load-test
* Stress Test
```
scn.inject(
  nothingFor(5 seconds),
  rampUsersPerSec(1) to (1200) during (2 minutes)
)
```
* Load Test
```
setUp(
  scn.inject(
    constantConcurrentUsers(2000) during (10 seconds),
    constantConcurrentUsers(4000) during (10 seconds),
    constantConcurrentUsers(6000) during (10 seconds),
    constantConcurrentUsers(8000) during (10 seconds),
    constantConcurrentUsers(10000) during (10 seconds)
  )
)
```

# [Spring Web 1](https://b2etw.github.io/reactive-coroutine-performance-test/disk/case1/spring_boot_1/index.html)
# [Spring Web 2](https://b2etw.github.io/reactive-coroutine-performance-test/disk/case1/spring_boot_2/index.html)
# [Spring Web 3](https://b2etw.github.io/reactive-coroutine-performance-test/disk/case1/spring_boot_3/index.html)
# [Spring Web 4](https://b2etw.github.io/reactive-coroutine-performance-test/disk/case1/spring_boot_4/index.html)
# [Spring Web 5](https://b2etw.github.io/reactive-coroutine-performance-test/disk/case1/spring_boot_5/index.html)
# [Spring Web 6](https://b2etw.github.io/reactive-coroutine-performance-test/disk/case1/spring_boot_6/index.html)
# [Vert.x 1](https://b2etw.github.io/reactive-coroutine-performance-test/disk/case1/vertx_1/index.html)
# [Vert.x 2](https://b2etw.github.io/reactive-coroutine-performance-test/disk/case1/vertx_2/index.html)
# [Vert.x 3](https://b2etw.github.io/reactive-coroutine-performance-test/disk/case1/vertx_3/index.html)
# [Vert.x 4](https://b2etw.github.io/reactive-coroutine-performance-test/disk/case1/vertx_4/index.html)
# [Vert.x 5](https://b2etw.github.io/reactive-coroutine-performance-test/disk/case1/vertx_5/index.html)
# [Vert.x 6](https://b2etw.github.io/reactive-coroutine-performance-test/disk/case1/vertx_6/index.html)