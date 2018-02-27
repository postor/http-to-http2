# with node.js on ubuntu

prepare

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

#first run


```