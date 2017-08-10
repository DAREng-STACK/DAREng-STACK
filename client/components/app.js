angular.module('main')


.service('serverComm', function($http) {
  this.getImages = function(params, callback) {
    $http({
      method: 'GET',
      url: '/images',
      params: {
          id: 'FKE7Brb'
      }
    }).then((response) => {
      console.log(response.data, 'GET REQUEST SUCCESS');
      // callback(response.data);
    }, (response) => {
          console.log('GET REQUEST ERROR')
    });
  };

  this.postContent = function (data) {
    $http({
      method: 'POST',
      url: '/images',
      data: data
    }).then((err, res) => {
      if(err){
        console.log('error')
      }
      console.log('POST REQUEST SUCCESS', res);
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

      serverComm.getImages(this.renderimages);
      serverComm.postContent({
          id: 'FKE7Brb',
          userId: 1,
          title: 'John Oliver Doesn’t Care about Your Mug',
          description: 'And he bathes in the tears of fools and bullies.',
          datetime: '1494315923',
          type: 'image/png',
          animated: 'false',
          width: 610,
          height: 321,
          size: 352152,
          views: 2508,
          bandwidth: '883197216',
          vote: null,
          favorite: false,
          nsfw: false,
          section: null,
          account_url: null,
          account_id: null,
          is_ad: false,
          in_most_viral: false,
          tags: [],
          ad_type: 0,
          ad_url: '',
          in_gallery: true,
          link: 'http://i.imgur.com/FKE7Brb.png'
      });
    },
    templateUrl: '../templates/app.html',
  });
