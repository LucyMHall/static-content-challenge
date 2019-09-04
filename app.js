const express = require('express');
const mustacheExpress = require('mustache-express');
const showdown = require('showdown');
const fs = require('fs');
const path = require('path');

const converter = new showdown.Converter();
const app = express();
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/src/views');


app.get('/about-page', function (req, res) {
  const reqDocPath = `./content${req.route.path}/index.md`;
  fs.readFile(reqDocPath, 'utf-8', function (err, data) {
    if (err) throw err;
    const convertedHtml = converter.makeHtml(data);
    res.render('template', {"content": convertedHtml});
  });
});

app.get('/valves', function (req, res) {
  const reqDocPath = `./content${req.route.path}/index.md`;
  fs.readFile(reqDocPath, 'utf-8', function (err, data) {
    if (err) throw err;
    const convertedHtml = converter.makeHtml(data);
    res.render('template', {"content": convertedHtml});
  });
});

app.get('/jobs', function (req, res) {
  const reqDocPath = `./content${req.route.path}/index.md`;
  fs.readFile(reqDocPath, 'utf-8', function (err, data) {
    if (err) throw err;
    const convertedHtml = converter.makeHtml(data);
    res.render('template', {"content": convertedHtml});
  });
});


const server = app.listen(5000, function () {
  console.log('Node server is running..');
});
