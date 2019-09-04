const express = require('express');

const app = express();

app.get('/about-page', function (req, res) {
  res.send('<h1>The About Page</h1>');
});

app.get('/valves', function (req, res) {
  res.send('<h1>The Valves Page</h1>');
});

app.get('/jobs', function (req, res) {
  res.send('<h1>The Jobs Page</h1>');
});


const server = app.listen(5000, function () {
  console.log('Node server is running..');
});
