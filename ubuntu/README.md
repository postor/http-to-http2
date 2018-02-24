# with shell on ubuntu

this also explains how docker works

## prepare

1.to use certbot you need a domain and config it to your server

2.install nginx, certbot and start a http blog

```
# registry
sudo apt-get -o Acquire::ForceIPv4=true update

# nginx
sudo apt-get install nginx -y

# certbot
sudo apt-get update
sudo apt-get install software-properties-common -y
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install certbot  -y
sudo apt install python-certbot-nginx -y

# a site of http (a hexo blog refer https://hexo.io/)
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
npm install hexo-cli -g
hexo init blog
cd blog
npm install
nohup hexo server &
curl localhost:4000
# get blog page
```

## nginx domain config

```
sudo cd /etc/nginx/sites-enabled
sudo vi test.i18ntech.com
#server {
#       listen 80;
#       listen [::]:80;
#
#       server_name test.i18ntech.com;
#
#       root /var/www/test.i18ntech.com;
#       index index.html;
#
#       location / {
#               try_files $uri $uri/ =404;
#       }
#}

vi /var/www/test.i18ntech.com/index.html
# test
sudo service nginx restart

curl http://test.i18ntech.com/
# get what you put in index.html
```

## generate certification with certbot

```
sudo certbot --nginx
# Enter email address (used for urgent renewal and security notices) (Enter 'c' to cancel): postor@gmail.com
# (A)gree/(C)ancel: A
# (Y)es/(N)o: Y
#Which names would you like to activate HTTPS for?
#-------------------------------------------------------------------------------
#1: test.i18ntech.com
#-------------------------------------------------------------------------------
#Select the appropriate numbers separated by commas and/or spaces, or leave input
#blank to select all options shown (Enter 'c' to cancel): 1
#Please choose whether or not to redirect HTTP traffic to HTTPS, removing HTTP access.
#-------------------------------------------------------------------------------
#1: No redirect - Make no further changes to the webserver configuration.
#2: Redirect - Make all requests redirect to secure HTTPS access. Choose this for
#new sites, or if you're confident your site works on HTTPS. You can undo this
#change by editing your web server's configuration.
#-------------------------------------------------------------------------------
#Select the appropriate number [1-2] then [enter] (press 'c' to cancel): 2

sudo service nginx restart
curl http://test.i18ntech.com/
# get 301
```

## config proxy and http2

```
sudo cd /etc/nginx/sites-enabled
sudo vi test.i18ntech.com
#       location / {
#                proxy_pass http://localhost:4000;
#       }
#    listen [::]:443 ssl http2 ipv6only=on; # managed by Certbot
#    listen 443 ssl http2; # managed by Certbot

# **note** change above lines

sudo service nginx restart
curl http://test.i18ntech.com/
# browser get h2 protocol
```

## update certification 

```
certbot renew --pre-hook "service nginx stop" --post-hook "service nginx start"
```

you can add it to cron job