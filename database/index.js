var mongoose = require('mongoose');
var uri = process.env.MONGODB_URI || 'mongodb://localhost/fetcher';
mongoose.connect(uri, {
  useMongoClient: true
});

var db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});




var userSchema = mongoose.Schema({
  userName: String,
  id: Number,
  hashPass: String,
  salt: String,
  voteCount: Number
});

var imageSchema = mongoose.Schema({
  id: String,
  userId: Number,
  imageUrl: String,
  caption: String,
  geoLocation: {type:[Number], index:'2d sphere'},
  tags: Array,
  timeStamp: Number,
  comments: Array,
  likeCount: Number,
  dislikeCount: Number
});

// var commentSchema = mongoose.Schema({
//   userId: Number,
//   componentId: Number,
//   imageId: Number
// });

var User = mongoose.model('User', userSchema, 'users');
var Image = mongoose.model('Image', imageSchema, 'images');
// var Comment = mongoose.model('Comment', commentSchema, 'users');
var findNear = function(location, cb) {
  var lng = location[0];
  var lat = location[1];
  var lowerleft = [lng-1/60, lat-1/60];
  var upperright = [(lng*10+(1/6))/10, (lat*10+(1/6))/10];
  var box = [lowerleft, upperright];
  return Image.find({
    geoLocation: {
      $geoWithin: {
        $box: [lowerleft, upperright]
      }
    }
  }, cb);
}

var saveImage = (imageUrl, location) => {
  var newImage = new Image({
    // id: image.id,
    // userId: image.userId,
    imageUrl: imageUrl,
    timeStamp: Date.now(),
    geoLocation: location,
    // caption: image.description,
    likeCount: 0,
    dislikeCount: 0,
    // tags: image.tags,
    comments: []
  });

  newImage.save(function (err, res) {
   if (err) console.log('error', err); // saved!
   });

}
//
var saveUser = (user) => {
  var newUser = new User({
    userName: user.name,
    hashPass: String,
    salt: String,
    voteCount: Number
  })
}



var update = (imageData) => {
  Image.update({ _id: imageData.data._id }, { $set: { likeCount: imageData.data.likeCount, dislikeCount: imageData.data.dislikeCount, comments: imageData.data.comments }}, () => {
    console.log(imageData.data ,'SUCCESS UPDATING DB! (BUT CHECK)')
  });
}

module.exports.findNear = findNear;
module.exports.saveImage = saveImage;
module.exports.saveUser = saveUser;
module.exports.update = update;
