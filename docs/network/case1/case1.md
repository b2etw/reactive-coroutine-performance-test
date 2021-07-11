# Case 1, Network IO
* build a delay service which will return {time} ms with /delay/ms/{time} endpoint
* the target server will invoke delay endpoint and return

# Environment, ecs.g6.xlarge(4core, 16g)
* all services deploy on aliyun ecs.g6.xlarge machine

# Context
* target server receive request and invokes /delay/ms/500, /delay/ms/800, /delay/ms/1000 endpoints concurrently then return
* jmeter use constant throughput timer to keep 15 RPS
* for demo-delay-service
  * server.tomcat.threads.max=800 
* for demo-spring-mvc
  * server.tomcat.threads.max=800
* for demo-spring-flux
  * -Dreactor.netty.ioWorkerCount=1000
  * -Dreactor.netty.pool.maxConnections=8192

# Procedure
* Warm twice and hit three times
* mark the best one if we can

# MVC
![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/doc/network/case1/samples/mvc1.png)
![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/doc/network/case1/samples/mvc2.png)
![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/doc/network/case1/samples/mvc3.png)

# MVC Async
![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/doc/network/case1/samples/async1.png)
![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/doc/network/case1/samples/async2.png)
best
![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/doc/network/case1/samples/async3.png)

# WebFlux
![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/doc/network/case1/samples/flux1.png)
![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/doc/network/case1/samples/flux2.png)
best
![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/doc/network/case1/samples/flux3.png)

# WebFlux Coroutine
best
![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/doc/network/case1/samples/coroutine1.png)
![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/doc/network/case1/samples/coroutine2.png)
![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/doc/network/case1/samples/coroutine3.png)

# Vert.x
![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/doc/network/case1/samples/vertx1.png)
best
![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/doc/network/case1/samples/vertx2.png)
![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/doc/network/case1/samples/vertx3.png)

# Vert.x Coroutine
![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/doc/network/case1/samples/vertx-coroutine1.png)
![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/doc/network/case1/samples/vertx-coroutine2.png)
best
![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/doc/network/case1/samples/vertx-coroutine3.png)

# Ktor
![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/doc/network/case1/samples/ktor1.png)
![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/doc/network/case1/samples/ktor2.png)
![](https://raw.githubusercontent.com/b2etw/reactive-coroutine-performance-test/main/doc/network/case1/samples/ktor3.png)