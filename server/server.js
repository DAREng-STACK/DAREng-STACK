var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var db = require('../database/index.js');

var app = express();
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../')));
app.use('/', express.static(path.join(__dirname, '../client')));

//routes
app.get('/images', (req, res, next) => {
  console.log('GET REQUEST IN SERVER', req.body)

  db.selectAllImages((err, selected) => {
    if(err){
      console.log('err');
    }
    console.log(selected)
    res.send(selected);
  });
});

app.post('/images', (req, res) => {
  console.log(req)
  db.save(req.body)
})

app.post('/signup', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
})

app.post('/users', (req, res) => {

})
// db.connect();

var port = process.env.PORT || 4500;
var server = app.listen(port, () => {
  console.log('App is now running on port ', port);
});

module.exports = app;
