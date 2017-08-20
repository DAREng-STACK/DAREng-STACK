angular.module('main', ['bootstrapLightbox'])
  .config(function($sceDelegateProvider, LightboxProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([ 'self' ]);
    LightboxProvider.templateUrl = './templates/pic-modal.html';
  })
  .service('angularFilepicker', function($window){
    return $window.filepicker;
  })
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
      this.getLocation( (result) => {
        data.geoLocation = result;
        console.log(data);
        $http({
          method: 'POST',
          url: '/images',
          data: data
        }).then((resolve) => {
          console.log('POST REQUEST SUCCESS', resolve);
        }, (reject) => {
          console.log('POST REQUEST ERROR', reject)
        });
      })
    }
  
    this.getLocation = (cb) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          cb(pos);
        }, function() {
          console.log('Could not find location')
        })
      }
    }

    })
