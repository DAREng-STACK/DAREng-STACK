var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
// var db = require('/db/database');

var app = express();
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../')));
app.use('/', express.static(path.join(__dirname, '../client')));

//routes
app.get('/images', function(req, res, next) {
  res.redirect('/');
});
// db.connect();

var port = 4500;
var server = app.listen(port, () => {
  console.log('App is now running on port ', port);
});

module.exports = app;
