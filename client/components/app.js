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
      // callback(response.data);
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

      //function to get the top 5 images overall
      this.getTopFiveImages = (dataFromGetRequest) => {
        //iterate through all dataFromGetRequest
        //sort the data by likes (from fewest to most)
        //cut off the top 5
        //push results to topfiveimages array
      }
      //function to get the top 5 images based on the currently logged in user
      this.getYourMostLiked = (dataFromGetRequest) => {
        //iterate through all dataFromGetRequest and pull out only images posted by the user who is logged in
        //sort the data by likes (from fewest to most)
        //cut off the top 5
        //push images to yourmostlikeimages array
      }

      // serverComm.postContent({
      //     id: 'FKE7Brb',
      //     userId: 1,
      //     title: 'John Oliver Doesn’t Care about Your Mug',
      //     description: 'And he bathes in the tears of fools and bullies.',
      //     datetime: '1494315923',
      //     type: 'image/png',
      //     animated: 'false',
      //     width: 610,
      //     height: 321,
      //     size: 352152,
      //     views: 2508,
      //     bandwidth: '883197216',
      //     vote: null,
      //     favorite: false,
      //     nsfw: false,
      //     section: null,
      //     account_url: null,
      //     account_id: null,
      //     is_ad: false,
      //     in_most_viral: false,
      //     tags: [],
      //     ad_type: 0,
      //     ad_url: '',
      //     in_gallery: true,
      //     link: 'http://i.imgur.com/FKE7Brb.png'
      // });

    },
    templateUrl: '../templates/app.html'
  });
