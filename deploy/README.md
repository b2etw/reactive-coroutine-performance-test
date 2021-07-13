# Steps Note
* aws
```shell
aws configure
```
* terraform
```shell
tfenv list
tfenv install xxx
terraform init
terraform apply
terraform destroy
```
* ansible
```shell
ansible-playbook master.yml 
```
* ssh
```shell
ssh -i xxx.pem -o StrictHostKeyChecking=no ubuntu@xx.xx.xx.xx
scp -i xxx.pem -o StrictHostKeyChecking=no ./prometheus.yml ubuntu@xx.xx.xx.xx:~
wget https://downloads.apache.org//jmeter/binaries/apache-jmeter-5.4.1.tgz && tar -zxf apache-jmeter-5.4.1.tgz && rm apache-jmeter-5.4.1.tgz
```
* jmeter
```shell
jmeter -n -t perf-test.jmx
jmeter -g cpu_ktor_case_1_1.csv -o cpu_ktor_case_1_1
```