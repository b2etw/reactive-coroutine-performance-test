terraform {
  required_version = ">= 0.15"
}

provider "aws" {
  region = "ap-northeast-1"
  access_key = var.access_key
  secret_key = var.access_secret
}

//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//               佛祖保佑         永无BUG
variable "system_prefix" { default = "reactive-coroutine-performance-test" }
variable "environment" { default = "dev" }
variable "number_of_master_instances" { default = 1 }
variable "master_instance_type" { default = "t2.xlarge" }
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

data "aws_ami" "ubuntu" {
  most_recent = true

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-bionic-18.04-amd64-server-*"]
  }

  owners = ["099720109477"]
}

module "vpc" {
  source = "terraform-aws-modules/vpc/aws"

  name = "${var.system_prefix}-vpc"
  cidr = "192.168.0.0/16"

  azs             = ["ap-northeast-1a"]
  private_subnets = ["192.168.1.0/24"]
  public_subnets  = ["192.168.101.0/24"]

  enable_nat_gateway = true
  enable_vpn_gateway = true

  tags = {
    Terraform = "true"
    Environment = "${var.environment}"
  }
}

module "security_group" {
  source  = "terraform-aws-modules/security-group/aws"
  version = "~> 3.0"

  name        = "${var.system_prefix}-security-group"
  vpc_id      = module.vpc.vpc_id

  ingress_with_cidr_blocks = [
        {
          from_port   = 22
          to_port     = 22
          protocol    = "tcp"
          cidr_blocks = "0.0.0.0/0"
        },
        {
          from_port   = 8080
          to_port     = 8080
          protocol    = "tcp"
          cidr_blocks = "0.0.0.0/0"
        },
        {
          from_port   = 8888
          to_port     = 8888
          protocol    = "tcp"
          cidr_blocks = "0.0.0.0/0"
        },
        {
          from_port   = 27017
          to_port     = 27017
          protocol    = "tcp"
          cidr_blocks = "0.0.0.0/0"
        },
  ]

  egress_rules        = ["all-all"]

  tags = {
    Terraform = "true"
    Environment = "${var.environment}"
  }

}

module "ec2_cluster_master" {
  source                 = "terraform-aws-modules/ec2-instance/aws"
  version                = "~> 2.0"

  name                   = "${var.system_prefix}-master"
  instance_count         = var.number_of_master_instances

  ami                    = data.aws_ami.ubuntu.id
  instance_type          = var.master_instance_type
  key_name               = "rancher-key-aws-tokyo"
  monitoring             = true
  vpc_security_group_ids = [module.security_group.this_security_group_id]
  subnet_ids             = module.vpc.public_subnets

  root_block_device      = [{
    volume_size = 128
  }]

  tags = {
    Terraform   = "true"
    Environment = "${var.environment}"
  }
}

output "master_ips" {
  value = module.ec2_cluster_master.public_ip
}
