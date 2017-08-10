var expect = require('chai').expect;

describe('yourMostLiked', function() {
  it('should get five videos from the database', function() {
    expect(/*some array that comes from db*/).to.have.a.lengthOf(5);
  });

  it('should use ng-repeat to render videos dynamically', function() {
    expect(/*ng-repeat*/).to.exist;
  });
});