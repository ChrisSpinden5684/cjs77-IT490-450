#!/usr/bin/env bash

# Script for updating web server
sudo rm -rf /var/www/react-app
sudo git clone https://github.com/cjs77-IT490-450.git /var/www/react-app
cd /var/www/react-app/trivia-app/backend
sudo npm install
cd /var/www/react-app/trivia-app/frontend
sudo npm install
sudo npm run build
