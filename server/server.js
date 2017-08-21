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
app.post('/imageChange', function(req, res) {
  db.update(req.body);
  res.sendStatus(200);
});

app.get('/images', function(req, res, next) {
  //on GET request, first store the location
    var coord = req.query.geoLocation;
    //create base image model for geolocation sorting purposes
    var Image = mongoose.model('Image');
    var park = new Image({geoLocation: coord});
    //findNear function from database/index.js that queries db for images within the radius
    db.findNear(coord,
      function(err, docs) {
        if (!err) {
          res.send(docs);
        } else {
          throw err;
        }
      });
});

app.post('/images', (req, res) => {
  var callBack = function (result) {
    res.send(result);
  }
  imgur.postImageToImgur(req.body, callBack);
});

app.get('/login', (req, res) => {
    db.selectUser((err, data) => {
      if(err){
        res.redirect('/login')
      }
      res.send(data);
    },
    req.body);
})

app.post('/signup', (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  db.selectUser((err, data) => {
    if(err){
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
