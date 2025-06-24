#!/usr/bin/env bash

sudo apt update
sudo apt upgrade
sudo apt install zip -y
sudo apt install php -y
sudo apt install nano
sudo apt install composer
sudo apt install net-tools

sudo apt install apache2
sudo systemctl enable apache2
sudo systemctl start apache2

sudo apt install nginx
sudo systemctl enable nginx 

sudo apt install openssh-server
sudo systemctl enable openssh-server
sudo systemctl start openssh-server

wget https://github.com/MattToegel/IT490/archive/refs/heads/master.zip
unzip master.zip
cd IT490-master/
composer update

sudo useradd cjs77
sudo useradd hc477
sudo useradd hs723
sudo useradd jam374
sudo useradd ry26

curl -fsSL https://tailscale.com/install.sh | sh