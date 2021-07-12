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
```