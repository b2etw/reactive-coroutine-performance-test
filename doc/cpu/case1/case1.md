# Case 1, CPU
* process bcrypt hashing

# Environment, AWS t2.xlarge (4core 16g)

# Context
* jmeter use constant throughput timer to keep 15 RPS
* ab -n 100 -c 10

# Procedure
* warm twice and hit three times
* mark the best one if we can

# Spring Web
![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/doc/case1/samples/mvc1.png)
![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/doc/case1/samples/mvc2.png)
![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/doc/case1/samples/mvc3.png)

# Spring Reactive Web
![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/doc/case1/samples/flux1.png)
![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/doc/case1/samples/flux2.png)
best
![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/doc/case1/samples/flux3.png)

# Vert.x
![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/doc/case1/samples/vertx1.png)
best
![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/doc/case1/samples/vertx2.png)
![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/doc/case1/samples/vertx3.png)

# Ktor
![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/doc/case1/samples/vertx-coroutine1.png)
![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/doc/case1/samples/vertx-coroutine2.png)
best
![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/doc/case1/samples/vertx-coroutine3.png)
