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
      }).then(
        (resolve) => {cb(resolve.data);},
        (reject) => {console.log('GET REQUEST ERROR', reject)}
      );
    };

    this.postContent = function(data) {
<<<<<<< 99e9731674d40d0dbc4c9ce42ea44c41078602a0
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
=======
      $http({
        method: 'POST',
        url: '/images',
        data: data
      }).then(
        (resolve) => {},
        (reject) => {console.log('POST REQUEST ERROR', reject)}
      );
>>>>>>> code cleanup and style add, cleanup package-lock json of unused modules.
    }

    })
