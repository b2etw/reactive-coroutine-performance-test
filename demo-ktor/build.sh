#!/bin/bash

./gradlew clean
./gradlew installDist
docker build -t taiwanbackendgroup/demo-ktor:1.0.0 .
docker push taiwanbackendgroup/demo-ktor:1.0.0
