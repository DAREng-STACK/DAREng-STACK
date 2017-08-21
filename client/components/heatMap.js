angular.module('main')

.component('heatmap', {
  bindings: {
    location: '=',
    images: '<',
    image: '<'
  },
  controller: ($scope) => {
    // console.log($scope)
    var map;
    var infoWindow;

    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 10
      });
      infoWindow = new google.maps.InfoWindow;

      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          console.log(pos);
          infoWindow.setPosition(pos);
          infoWindow.setContent('Location found.');
          infoWindow.open(map);
          map.setCenter(pos);
        }, function() {
          handleLocationError(true, infoWindow, map.getCenter());
        });
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
      }
    }

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }
    //needs information about app usage from everywhere it's being used

    //somehow renders hot spots onto a map based on that data
    //will need a map image that registers location
    //something with google maps might make this doable?
    initMap();
  },
  templateUrl: '../templates/heat-map.html'
});
