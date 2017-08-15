var request = require('supertest');
var mongoose = require('mongoose');
describe('Server Unit Tests', function () {
  var server;
  beforeEach(function () {
    server = require('./../server/server.js');
  });
  it('responds to /', function testSlash(done) {
    request(server)
      .get('/')
      .expect(200, done);
  });
  it('responds to /images', function testPath(done) {
    console.log('test image route')
    request(server)
      .get('/images')
      .expect(302, done);
  });
  it('responds to /login', function testPath(done) {
    console.log('test login route')
    request(server)
      .get('/login')
      .expect(302, done);
  });
  it('responds to /signup', function testPath(done) {
    console.log('test signup route')
    request(server)
      .get('/signup')
      .expect(201, done);
  });
});

describe('Server Unit Tests', function () {
  var server;
  beforeEach(function () {
    server = require('./../server/server.js');
  });
  it('responds to /', function testSlash(done) {
    request(server)
      .get('/')
      .expect(200, done);
  });
  it('responds to /images', function testPath(done) {
    console.log('test image route')
    request(server)
      .get('/images')
      .expect(302, done);
  });
  it('responds to /login', function testPath(done) {
    console.log('test login route')
    request(server)
      .get('/login')
      .expect(302, done);
  });
  it('responds to /signup', function testPath(done) {
    console.log('test signup route')
    request(server)
      .get('/signup')
      .expect(201, done);
  });
});

describe('Node Server to Database connection tests', function () {
  var db;
  beforeEach(function () {
    mongoose.connect('mongodb://localhost/fetcher');
    db = mongoose.connection;
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
      voteCount: Number,
    });
  });
  afterEach(function() {
    db.end();
  })
  it('responds to get images request with array', function testSlash(done) {
    request(db)
      .get('/images')
      .expect(res.body );
  });
  it('responds to /images', function testPath(done) {
    console.log('test image route')
    request(server)
      .get('/images')
      .expect(302, done);
  });
  it('responds to /login', function testPath(done) {
    console.log('test login route')
    request(server)
      .get('/login')
      .expect(302, done);
  });
  it('responds to /signup', function testPath(done) {
    console.log('test signup route')
    request(server)
      .get('/signup')
      .expect(302, done);
  });
});
