# 🎓 Reactive X Coroutine X Performance Test
* We use Kotlin with popular frameworks and compare its performance on specific cases. 
* Comparing its performance on CPU or IO(Network, Disk) intensive cases.

# 🎯 Target
* Spring MVC (Servlet)
* Spring MVC Async (Servlet Async)
* Spring WebFlux
* Spring WebFlux Coroutine
* Vert.x
* Vert.x Coroutine
* Ktor

# 📄 Cases
* Variable
  * CPU
  * IO
    * Memory (ignore)
    * Network ([case1](./doc/case1/case1.md))
    * Disk

# 💫 Principle
* We're doing performance testing ([ref1](https://www.guru99.com/performance-vs-load-vs-stress-testing.html), [ref2](https://www.blazemeter.com/blog/performance-testing-vs-load-testing-vs-stress-testing))
  * use proper RPS and review the metrics
* Wrong coding way
  * use blocking way to compare with non-blocking coding type

# 🧱 Deployment
* Terraform for managing VM
* Ansible for setting VM
* Docker Compose for managing instances

# 🧨 Testing
* JMeter HTTP requests

# 📊 Metrics
* Prometheus and Grafana

# ☄️ Future Targets
* [Micronaut](https://micronaut.io/)
* [MicroProfile](https://microprofile.io/)
* [Quarkus](https://quarkus.io/)
