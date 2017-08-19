var request = require('request');
var fs = require('fs');
var FormData = require('form-data');

var postImageToImgur = function(image, callback) {
  var options = {
    'method': 'POST',
    'url': 'https://api.imgur.com/3/image',
    // 'data': {
    //   'file': image
    // },
    'headers': {
      'authorization': 'Client-ID ca81384e1743235'
    }
  }

  // var data = {
  //   image: fs.readFileSync(image, {
  //     encoding: 'base64'
  //   })
  // }

  // request(options, function(err, res) {
  //   callback(JSON.parse(res.body));
  // });
  var form = new FormData();
  form.append('image', fs.createReadStream(image, {
    encoding: 'base64'
  }));


  var req = request(options, function (err, res) {
    if (err) {
      console.log(err, 'ERROR');
    } else {
      console.log('RESPONSE', res.body);
      var chunks = [];

      res.on("data", function (chunk) {
        chunks.push(chunk);
      });

      res.on("end", function () {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
      });
    }
  });

  req.write(`${form}`);
  req.end();
};

module.exports.postImageToImgur = postImageToImgur;
