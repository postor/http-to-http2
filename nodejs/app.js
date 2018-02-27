'use strict';

require('letsencrypt-express').create({
  server: process.env.LETSENCRYPT_SERVER || 'https://acme-staging.api.letsencrypt.org/directory',
  email: 'postor@gmail.com',
  agreeTos: true,
  approveDomains: ['test.i18ntech.com'],
  app: require('express')().use('/', function (req, res) {
    res.end('Hello, World!');
  })

}).listen(80, 443);