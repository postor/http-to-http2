const express = require('express')
const spdy = require('spdy')
const fs = require('fs')
const url = require('url')

const server = express()
const certPath = '/etc/letsencrypt/live/test.i18ntech.com/'

server.use((req, res, next) => {
  if (req.secure) {
    next()
    return
  }
  res.redirect(fullUrl(req))
})

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
  .listen(443, (err) => {
    if (err) throw err
    console.log('> Ready http2 on https://localhost')
  })

function fullUrl(req) {
  return url.format({
    protocol: 'https',
    host: req.get('host'),
    pathname: req.originalUrl
  });
}