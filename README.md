# 🎓 Reactive X Coroutine X Performance Test
* We use Kotlin with popular HTTP Server Side Applications to compare its performance on specific cases. 
* Comparing its performance on CPU, Network IO or Disk intensive cases.

# 🎯 Target
* Spring MVC (Servlet)
* Spring MVC Async (Servlet Async)
* Spring WebFlux
* Spring WebFlux Coroutine
* Vert.x
* Vert.x Coroutine
* Ktor

# 📊 Cases
* Variable
  * CPU (light or intensive)
  * IO (light or intensive)
    * Memory
    * Network ([case1](./doc/case1/case1.md))
    * Disk

# 💫 Principle
* We're doing performance mix load testing not pressure testing
  * use proper RPS instead as high as possible
* Wrong coding way
  * use blocking way to compare with non-blocking coding type

# Deployment
# Testing
# Metrics

# ☄️ Future Targets
* [Micronaut](https://micronaut.io/)
* [MicroProfile](https://microprofile.io/)
* [Quarkus](https://quarkus.io/)
