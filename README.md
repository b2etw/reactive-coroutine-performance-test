# ๐ Reactive X Coroutine X Performance Test
* We use **Kotlin** with popular frameworks and compare its performance on specific cases. 
* Comparing its performance on CPU, Network IO and Disk IO intensive cases.

# ๐ฏ Target
* Spring Web
  * Spring MVC
  * Spring MVC Async
* Spring Reactive Web
  * Spring WebFlux
  * Spring WebFlux Coroutine
* Vert.x
  * Verticle
  * Coroutine Verticle
* Ktor

# ๐ Cases
* Variable
  * CPU
    * [case1](./docs/cpu/case1/case1.md)
  * IO
    * Network
      * [case1](./docs/network/case1/case1.md)
      * [case2](./docs/network/case2/case2.md)
    * Disk
      * [case1](docs/disk/case1/case1.md)
      * [case2](docs/disk/case2/case2.md)

# ๐งฑ Deployment
* Terraform for managing VM
* Ansible for setting VM
* Docker Compose for managing servers

# ๐งจ Testing
* JMeter HTTP requests

# ๐ Metrics
* Prometheus and Grafana

# โ๏ธ Future Targets
* [Micronaut](https://micronaut.io/)
* [MicroProfile](https://microprofile.io/)
* [Quarkus](https://quarkus.io/)
