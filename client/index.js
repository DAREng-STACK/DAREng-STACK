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
      //grab the user location and send along with the ajax GET request
      this.getLocation ( (results) => {
        var data = {};
        data.geoLocation = results;
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
        //grab image location and send location with POST request
        data.geoLocation = result;
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

    //this sends the google maps api call and grabs the user location
    this.getLocation = (cb) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = [
            position.coords.longitude,
            position.coords.latitude
          ];
          cb(pos);
        }, function() {
          console.log('Could not find location')
        })
      }
    }

    })
