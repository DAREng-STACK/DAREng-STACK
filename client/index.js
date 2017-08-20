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
      this.getLocation ( (results) => {
        var data = {};
        data.geoLocation = results;
        console.log(data.geoLocation, '@DFA')
        $http({
          method: 'GET',
          url: '/images',
          params: data,
        }).then(
          (resolve) => {cb(resolve.data);},
          (reject) => {console.log('GET REQUEST ERROR', reject)}
        );
      })
    };

    this.postContent = function(data) {
      this.getLocation( (result) => {
        data.geoLocation = result;
        console.log(result);
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
          var pos = [
            position.coords.latitude,
            position.coords.longitude
          ];
          console.log(pos)
          cb(pos);
        }, function() {
          console.log('Could not find location')
        })
      }
    }

    })
