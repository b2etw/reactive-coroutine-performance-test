# 🎓 Reactive X Coroutine X Performance Test
* We use Kotlin with popular frameworks and compare its performance on specific cases. 
* Comparing its performance on CPU or IO(Network, Disk) intensive cases.

# 🎯 Target
* Spring MVC
* Spring MVC Async
* Spring WebFlux
* Spring WebFlux Coroutine
* Vert.x
* Vert.x Coroutine
* Ktor

# 📄 Cases
* Variable
  * CPU
    * [case1](./doc/cpu/case1/case1.md)
  * IO
    * Network
      * [case1](./doc/network/case1/case1.md)
      * [case2](./doc/network/case1/case2.md)
    * Disk
      * [case1](./doc/disk/case1/case1.md)

# 💫 Principle
* We're doing performance testing ([ref1](https://www.guru99.com/performance-vs-load-vs-stress-testing.html), [ref2](https://www.blazemeter.com/blog/performance-testing-vs-load-testing-vs-stress-testing))
  * use proper RPS and review the metrics
* We're not finding the best solution
  * use proper coding style and consider other factors

# 🧱 Deployment
* Terraform for managing VM
* Ansible for setting VM
* Docker Compose for managing instances

# 🧨 Testing
* Apache Benchmark
* JMeter HTTP requests

# 📊 Metrics
* Prometheus and Grafana

# ☄️ Future Targets
* [Micronaut](https://micronaut.io/)
* [MicroProfile](https://microprofile.io/)
* [Quarkus](https://quarkus.io/)
