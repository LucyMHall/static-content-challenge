const express = require('express');
const mustacheExpress = require('mustache-express');

const app = express();
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/src/views');


app.get('/about-page', function (req, res) {
  res.render('<h1>The About Page</h1>');
});

app.get('/valves', function (req, res) {
  res.send('<h1>The Valves Page</h1>');
});

app.get('/jobs', function (req, res) {
  res.render('template');
});


const server = app.listen(5000, function () {
  console.log('Node server is running..');
});
