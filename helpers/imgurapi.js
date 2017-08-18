var request = require('request');

var postImageToImgur = function(image, callback) {
  var options = {
    'method': 'POST',
    'url': 'https://api.imgur.com/3/image',
    'data': image, //check server side image 
    'headers': {
      'authorization': 'Client-ID ca81384e1743235'
    }
  }


}
