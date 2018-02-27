const express = require('express')
const spdy = require('spdy')
const fs = require('fs')
const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS

const server = express()
const certPath = '/etc/letsencrypt/live/test.i18ntech.com/'

server.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/]))

server.use('/', (req, res) => {
  res.send('http2!')
})

//http
server.listen(80, (err) => {
  if (err) throw err
  console.log('> Ready http on http://localhost')
})

//http2
spdy.createServer({
  key: fs.readFileSync(certPath + '/privkey.pem'),
  cert: fs.readFileSync(certPath + '/fullchain.pem')
}, server)
  .listen(433, (err) => {
    if (err) throw err
    console.log('> Ready http2 on https://localhost')
  })