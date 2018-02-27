# with node.js on ubuntu

## prepare

```
# registry
sudo apt-get -o Acquire::ForceIPv4=true update

#git
sudo apt install git -y

# certbot
sudo apt-get update
sudo apt-get install software-properties-common -y
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install certbot  -y
sudo apt install python-certbot-nginx -y

#node
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install nodejs python2.7 make build-essential -y

#checkout
git clone https://github.com/postor/http-to-http2.git
cd http-to-http2/nodejs
npm install

```

## generate certification

```
certbot certonly

#How would you like to authenticate with the ACME CA?
#-------------------------------------------------------------------------------
#1: Spin up a temporary webserver (standalone)
#2: Place files in webroot directory (webroot)
#-------------------------------------------------------------------------------
#Select the appropriate number [1-2] then [enter] (press 'c' to cancel): 1

#Enter email address (used for urgent renewal and security notices) (Enter 'c' to
#cancel): postor@gmail.com
#Please read the Terms of Service at
#https://letsencrypt.org/documents/LE-SA-v1.2-November-15-2017.pdf. You must
#agree in order to register with the ACME server at
#https://acme-v01.api.letsencrypt.org/directory
#-------------------------------------------------------------------------------
#(A)gree/(C)ancel: A

#Would you be willing to share your email address with the Electronic Frontier
#Foundation, a founding partner of the Let's Encrypt project and the non-profit
#organization that develops Certbot? We'd like to send you email about EFF and
#our work to encrypt the web, protect its users and defend digital rights.
#-------------------------------------------------------------------------------
#(Y)es/(N)o: Y

#Please enter in your domain name(s) (comma and/or space separated)  (Enter 'c'
#to cancel): test.i18ntech.com






```