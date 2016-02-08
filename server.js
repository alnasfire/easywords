var express = require('express');
var fs = require('fs');
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.render('home', {
    title: 'Welcome'
  });
});

app.get('/add', function(req, res) {
  res.render('add', {
    title: 'Add words'
  });
});

app.get('/learn', function(req, res) {
  let result = JSON.parse(fs.readFileSync('words', 'utf8'));
  res.render('learn', {
    title: 'Learn words',
    words: result
  });
});

app.listen(3000);