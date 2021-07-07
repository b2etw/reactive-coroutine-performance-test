terraform {
  required_version = ">= 0.12"
}

provider "alicloud" {
  access_key = var.access_key
  secret_key = var.secret_key
  region     = "cn-shanghai"
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
variable "number_of_master_instances" { default = 2 }
variable "master_instance_type" { default = "ecs.g6.large" }
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

data "alicloud_images" "ubuntu" {
  most_recent = true
  name_regex  = "^ubuntu_18.*64"
}

module "vpc" {
  source = "alibaba/vpc/alicloud"
  region = "cn-shanghai"
  profile = "default"

  vpc_name = "${var.system_prefix}-vpc"
  vpc_cidr = "192.168.0.0/16"

  availability_zones = ["cn-shanghai-g"]
  vswitch_cidrs = ["192.168.1.0/24"]
}

module "security_group" {
  source = "alibaba/security-group/alicloud"
  region = "cn-shanghai"
  profile = "default"

  name = "${var.system_prefix}-security-group"
  vpc_id = module.vpc.this_vpc_id

  ingress_with_cidr_blocks_and_ports = [
    {
      ports = "22"
      protocol = "tcp"
      priority = 1
      cidr_blocks = "0.0.0.0/0"
    },
    {
      ports = "8888"
      protocol = "tcp"
      priority = 1
      cidr_blocks = "0.0.0.0/0"
    },
    {
      ports = "8080"
      protocol = "tcp"
      priority = 1
      cidr_blocks = "0.0.0.0/0"
    }
  ]
}

module "ecs_cluster_master" {
  source  = "alibaba/ecs-instance/alicloud"
  region  = "cn-shanghai"
  profile = "default"

  number_of_instances = var.number_of_master_instances

  name                        = "${var.system_prefix}-master"
  use_num_suffix              = true
  image_id                    = data.alicloud_images.ubuntu.ids.0
  instance_type               = var.master_instance_type
  vswitch_ids                 = module.vpc.this_vswitch_ids
  security_group_ids          = [module.security_group.this_security_group_id]
  associate_public_ip_address = true
  internet_max_bandwidth_out  = 100

  key_name = "rancher-key-aliyun"

  system_disk_category = "cloud_essd"
  system_disk_size     = 256

  tags = {
    Created = "Terraform"
  }
}

output "master_public_ips" {
  value = module.ecs_cluster_master.this_public_ip
}

output "master_private_ips" {
  value = module.ecs_cluster_master.this_private_ip
}