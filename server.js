var express = require('express');

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
  res.render('Learn', {
    title: 'Learn words'
  });
});

app.listen(3000);