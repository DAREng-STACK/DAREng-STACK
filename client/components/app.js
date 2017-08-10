angular.module('main')


.service('serverComm', function($http) {
  this.getImages = function(params, callback) {
    $http({
      method: 'GET',
      url: '/images',
      params: params
    }).then((response) => {
      console.log(response.data, 'GET REQUEST SUCCESS');
      callback(response.data);
    }, (response) => {
          console.log('GET REQUEST ERROR')
    });
  };

  this.postContent = function (data) {
    $http({
      method: 'POST',
      url: '/images',
      data: data
    }).then(() => {
      console.log('POST REQUEST SUCCESS');
    }, () => {
      console.log('POST REQUEST ERROR')
    });
  }
})





  .component('app', {
    controller: (serverComm) => { 
    	this.images = [];
      this.renderImages = (newImages) => {
      	this.images = newImages;
      }

      // serverComm.getImages(this.renderimages); 
      serverComm.postContent({username: 'Ryan'});
    },
    templateUrl: '../templates/app.html',
  });
