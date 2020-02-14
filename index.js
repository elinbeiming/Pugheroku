const express = require('express');
const app = express();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('a297c7e6198648958499322417bcc1a0');
var port = process.env.port || 3000;

app.set('view engine', 'pug');

newsapi.v2.sources({
  category: 'technology',
  language: 'en',
  country: 'us'
}).then(response => {
  app.get('/', function (req, res) {
    res.render('index', {title: "PUG", paragraf: JSON.stringify(response.sources[0].description)})
  })
});

app.listen(port);
