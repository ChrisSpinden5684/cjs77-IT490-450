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

curl -fsSL https://tailscale.com/install.sh | sh && sudo tailscale up --auth-key=tskey-auth-kkjULnt1ru11CNTRL-PahDbksxXmhsEG46HaNbmh8UxqZsK8BH --hostname=dev-mq-404notfounders