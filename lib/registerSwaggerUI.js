const path = require('path');
const express = require('express');
const fs = require('fs');

const registerSwaggerUI = (app, swaggerConfig) => {
  const publicDir = path.resolve(__dirname, './public/');
  const router = new express.Router();
  router.get('/', function (req, res) {
    let template = path.resolve(publicDir, 'html/index.html');
    let html = fs.readFileSync(template, 'UTF-8');
    html = html.replace('"_$SWAGGER_CONFIG$_"', JSON.stringify(swaggerConfig));
    res.send(html);
  });
  app.use(express.static(publicDir));
  app.use(swaggerConfig.route.url, router);
};
module.exports = {
  registerSwaggerUI,
};
