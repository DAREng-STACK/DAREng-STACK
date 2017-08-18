var checkUsername = (data) => {

}

//addGeoLocation is a promise
var addGeoLocation = () => {
  // function handleLocationError() {
  // }
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      this.geoLocation = pos;
    }, function() {
      console.log('geolocationbroke@@@@@@@@@@@@@@@@@@@@@@@@')

      // handleLocationError();
    });
  } else {
     // Browser doesn't support Geolocation
     console.log('geolocationbroke@@@@@@@@@@@@@@@@@@@@@@@@')
    // handleLocationError();oke
  }
}

module.exports.addGeoLocation = addGeoLocation;
