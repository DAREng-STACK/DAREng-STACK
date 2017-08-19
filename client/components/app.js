angular.module('main')
.service('serverComm', function($http) {
  this.getImages = function(cb) {
    $http({
      method: 'GET',
      url: '/images',
    }).then((response) => {
      console.log(response.data, 'GET REQUEST SUCCESS');
      cb(response.data);
    }, (response) => {
          console.log('GET REQUEST ERROR')
    });
  };

  this.postContent = function(data) {
    $http({
      method: 'POST',
      url: '/images',
      data: data
    }).then((resolve) => {
      console.log('POST REQUEST SUCCESS', resolve);
    }, (reject) => {
      console.log('POST REQUEST ERROR', reject)
    });
  }

})


  .component('app', {
    controller: function(serverComm) {
      this.images = [];
      this.topfiveimages = [];

      this.$onInit = function () {
        serverComm.getImages((result) => {
          this.images = result.sort(function (a,b) {
            return b.timeStamp - a.timeStamp;
          })
          console.log('images sorted ', this.images);
        });
        /*
        this.topfiveimages = this.images.sort(function(a, b) {
          return b.voteCount - a.voteCount; 
        }); */
      };
    },
    templateUrl: '../templates/app.html'
  });
