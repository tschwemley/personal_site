#!/usr/bin/env bash

echo "Updating packages..."
apt-get update

# Git
echo "Installing git"
apt-get install -y git

# Nginx
echo "Installing Nginx"
apt-get install -y nginx

# Nginx config
echo "Configuring Nginx"
cp /vagrant/vagrant/conf/personal.conf /etc/nginx/sites-available/personal.conf
ln -s /etc/nginx/sites-available/personal.conf /etc/nginx/sites-enabled/personal.conf

rm -rf /etc/nginx/sites-available/default

service nginx restart

# Nodejs and npm
echo "Installing node and npm"
apt-get install -y node
apt-get install -y npm

echo "Provisioning finished"
