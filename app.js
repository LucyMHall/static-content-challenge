const express = require('express');
const mustacheExpress = require('mustache-express');
const showdown = require('showdown');
const fs = require('fs');
const path = require('path');

const converter = new showdown.Converter();
const app = express();
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', `${__dirname}/src/views`);


app.get('/about-page', function (req, res) {
  const urlPath = req.route.path;
  const markdownFilePath = `./content${urlPath}/index.md`;
  fs.readFile(markdownFilePath, 'utf-8', function (err, contentOfMarkdownFile) {
    if (err) throw err;
    const convertedMdToHtmlContent = converter.makeHtml(contentOfMarkdownFile);
    res.render('template', { content: convertedMdToHtmlContent });
  });
});

app.get('/valves', function (req, res) {
  const urlPath = req.route.path;
  const markdownFilePath = `./content${urlPath}/index.md`;
  fs.readFile(markdownFilePath, 'utf-8', function (err, contentOfMarkdownFile) {
    if (err) throw err;
    const convertedMdToHtmlContent = converter.makeHtml(contentOfMarkdownFile);
    res.render('template', { content: convertedMdToHtmlContent });
  });
});

app.get('/jobs', function (req, res) {
  const urlPath = req.route.path;
  const markdownFilePath = `./content${urlPath}/index.md`;
  fs.readFile(markdownFilePath, 'utf-8', function (err, contentOfMarkdownFile) {
    if (err) throw err;
    const convertedMdToHtmlContent = converter.makeHtml(contentOfMarkdownFile);
    res.render('template', { content: convertedMdToHtmlContent });
  });
});

app.use(function (req, res) {
  res.status(404).send('404 - Page not Found');
});

const server = app.listen(5000, function () {
  console.log('Node server is running..');
});
