var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {
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
  id: Number,
  userId: Number,
  imageUrl: String,
  timeStamp: String,
  geoLocation: String,
  commentId: Number,
  voteCount: Number,
  tags: Array,
  comments: Array
});

// var commentSchema = mongoose.Schema({
//   userId: Number,
//   componentId: Number,
//   imageId: Number
// });

var User = mongoose.model('User', userSchema, 'users');
var Image = mongoose.model('Image', imageSchema, 'users');
var Comment = mongoose.model('Comment', commentSchema, 'users');

var selectAll = (callback, model) => {
  model.find({}, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}

// var selectImages = (callback, query) => {
//   Image.find({query}, (err, results) => {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, results);
//     }
//   });
// }

// var save = () => {
//
// }

module.exports.selectAll = selectAll;
