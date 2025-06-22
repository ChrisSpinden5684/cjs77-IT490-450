#!/usr/bin/env bash

sudo apt update
sudo apt upgrade
sudo apt install zip
sudo apt install php
sudo apt install nano
sudo apt install composer
sudo apt install rabbitmq-server
sudo apt install net-tools

sudo systemctl enable rabbitmq-server
sudo systemctl start rabbitmq-server

sudo apt install openssh-server
sudo systemctl enable openssh-server
sudo systemctl start openssh-server

wget https://github.com/MattToegel/IT490/archive/refs/heads/master.zip
unzip master.zip
cd IT490-master/
composer update

curl -fsSL https://tailscale.com/install.sh | sh

# Adds users for every team member
sudo useradd cjs77
sudo useradd hc477
sudo useradd hs723
sudo useradd jam374
sudo useradd ry26

# Enables and starts the rsyslog service
sudo systemctl enable rsyslog.service
sudo systemctl start rsyslog.service


# Firewall rules for allowing rsyslog traffic and ssh traffic
sudo ufw allow 514/tcp
sudo ufw allow 22

