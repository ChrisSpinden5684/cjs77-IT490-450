#!/usr/bin/env bash

sudo apt update
sudo apt upgrade
sudo apt install zip
sudo apt install php
sudo apt install nano
sudo apt install composer
sudo apt install rabbitmq-server
sudo apt install net-tools

sudo useradd cjs77
sudo useradd hc477
sudo useradd hs723
sudo useradd jam374
sudo useradd ry26

# Admin must set passwords after script completion
# Admin is lazy

sudo systemctl enable rabbitmq-server
sudo systemctl start rabbitmq-server

sudo apt install openssh-server
sudo systemctl enable openssh-server
sudo systemctl start openssh-server

curl -fsSL https://tailscale.com/install.sh | sudo sh

wget https://github.com/MattToegel/IT490/archive/refs/heads/master.zip
unzip master.zip
cd IT490-master/
composer update

