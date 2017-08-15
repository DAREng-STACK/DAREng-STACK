
var expect = require('chai').expect;

describe('app', function() {
  it('should execute a successful GET request', function() {
    expect(/*return from GET request*/).to.be.a('object');
  });

  it('should push results to topfiveimages array', function() {
    expect(/*topfiveimages*/).to.have.lengthOf(5);
  });

  it('should push results to yourmostlikedimages array', function() {
    expect(/*yourmostlikedimages*/).to.have.lengthOf(5);
  });

  it('should push results to sortedbytimestampimages array', function() {
    expect(/*sortedbytimestampimages*/).to.have.lengthOf.above(0);
  });

  it('sortedbytimestampimages array should be in order from oldest to newest', function() {
    expect(/*sortedbytimestampimages[0].datetime*/).to.be.above(/*sortedbytimestampimages[sortedtimestampimages.length - 1].datetime*/);
  });

  it('sortedbytimestampimages array should be in order from oldest to newest', function() {
    expect(/*sortedbytimestampimages[1].datetime*/).to.be.above(/*sortedbytimestampimages[sortedtimestampimages.length - 2`].datetime*/);
  });
});



