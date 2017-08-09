angular.module('main')


.service('serverGet', function($http) {
  this.getimages = function(params, callback) {
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
})



  .component('app', {
    controller: (serverGet) => { 
    	this.images = [];
      this.renderimages = (newImages) => {
      	this.images = newImages;
      }

      serverGet.getimages(this.renderimages);
    },
    templateUrl: '../templates/app.html',
  });
