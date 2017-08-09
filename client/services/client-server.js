var axios = require 'axios';

angular.module('main')
.service('serverGet', function() {

  this.getimages = function (callback) {
    axios.get('/images')
      .then(function(response) {
        console.log(respose, 'Response in get request from client to server.');
        callback(response);
      })
      .catch(function (error) {
        console.log(error, 'Error in get request from client to server');
      })
  }

});


