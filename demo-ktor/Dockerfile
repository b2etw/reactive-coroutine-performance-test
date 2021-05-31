FROM openjdk:11-jre-slim
RUN mkdir /app
COPY ./build/install/demo-ktor/ /app/
ENV DELAY_SERVICE_DOMAIN 192.168.1.41
WORKDIR /app/bin
CMD ["./demo-ktor"]