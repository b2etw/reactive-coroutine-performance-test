FROM openjdk:11-jre-slim
RUN mkdir /app
COPY ./build/install/demo-ktor/ /app/
WORKDIR /app/bin
CMD ["./demo-ktor"]