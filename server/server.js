var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var db = require('../database/index.js');
var path = require('path');
var imgur = require('../helpers/imgurapi.js');


var app = express();
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../')));
app.use('/', express.static(path.join(__dirname, '../client')));

//routes
app.post('/comments', function(req, res) {
  console.log(req.body);
});

app.post('/likes', function(req, res) {
  console.log(req.body);
});

app.post('/dislikes', function(req, res) {
  console.log(req.body);
});


app.get('/images', function(req, res, next) {
  console.log('GET REQUEST IN SERVER')

  db.selectAllImages((err, selected) => {
    if(err){
      console.log('err');
    }
    // console.log(selected)
    res.send(selected);
  });
});

app.post('/images', (req, res) => {
  console.log('req body', req.body);
  var callBack = function (result) {
    //callback sends imgur link back to client
    res.send(result);
  }
  imgur.postImageToImgur(req.body, callBack);
});

app.get('/login', (req, res) => {
  console.log(req.body, "@@@@@@@@@@@@@@@")
    db.selectUser((err, data) => {
      if(err){
        console.log('username or password incorrect');
        res.redirect('/login')
      }
      res.send(data);
    },
    req.body);
})

app.post('/signup', (req, res) => {
  console.log(req.body, '@#$%@#@$#@%')
  var username = req.body.username;
  var password = req.body.password;
  db.selectUser((err, data) => {
    if(err){
      console.log('ERRROR', err, "ERROR");
      db.saveUser(data)
    }else{
      res.redirect('/login');
    }
  },
  req.body);
})

app.post('/users', (req, res) => {

})


var port = process.env.PORT || 4500;
var server = app.listen(port, () => {
  console.log('App is now running on port ', port);
});

module.exports = app;
