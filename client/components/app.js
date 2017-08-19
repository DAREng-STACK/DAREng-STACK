angular.module('main')
.service('serverComm', function($http) {
  this.getImages = function(/*params, callback*/) {
    $http({
      method: 'GET',
      url: '/images',
      // params: {
      //     id: 'FKE7Brb'
      // }
    }).then((response) => {
      console.log(response.data, 'GET REQUEST SUCCESS');
      for (var i = 0; i < response.data.length; i++) {
        window.actualImageData.push(response.data[i]);
      }
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
      serverComm.getImages(/*this.renderimages*/);
      this.images = window.actualImageData;
      this.topfiveimages = this.images.sort(function(a, b) {
        return b.voteCount - a.voteCount;
      });
      this.yourmostlikedimages = [];
      this.sortedbytimestampimages = [];

      this.sortByTimeStamp = (dataFromGetRequest) => {
        //iterate through all dataFromGetRequest
        //sort the data by time (from oldes to newest)
        //push results to topfiveimages array
      }


    },
    templateUrl: '../templates/app.html'
  });
