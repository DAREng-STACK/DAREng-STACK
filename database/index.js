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
  geoLocation: String,
  tags: Array,
  timeStamp: String,
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

var selectAllImages = (callback) => {
  Image.find({}, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}

 var selectImages = (callback, query) => {
  Image.find({query}, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}

var selectUser = (callback, query) => {
  User.find({query}, (err, data) => {
    if (err) {
      callback(err, null);
    }else{
      callback(null, data);
    }
  })
}

var save = (image) => {
  var newImage = new Image({
    // id: image.id,
    // userId: image.userId,
    imageUrl: image,
    // timeStamp: image.timeStamp,
    geoLocation: null,
    // caption: image.description,
    likeCount: 0,
    dislikeCount: 0,
    // tags: image.tags,
    comments: []
  });
  // newImage.addGeoLocation();
  // newImage.save(function(err, res) {
  //   if (err) {
  //     return err;
  //   }else{
  //     return res;
  //   }
  // });
  newImage.save(function (err) {
   if (err) return handleError(err); // saved!
   });
console.log(image, 'IMAGE STUFF IN DB!')
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

module.exports.selectAllImages = selectAllImages;
module.exports.save = save;
module.exports.selectUser = selectUser;
module.exports.saveUser = saveUser;
module.exports.update = update;
