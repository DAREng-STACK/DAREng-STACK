var expect = require('chai').expect;

describe('topFiveSpec', function() {
  it('should get five videos from the database', function() {
    expect(/*some array that comes from db*/).to.have.a.lengthOf(5);
  });

  it('should use ng-repeat to render videos dynamically', function() {
    expect(/*ng-repeat*/).to.exist;
  });
});


// describe('app', function() {
//   it('should list ALL blobs on /blobs GET');
//   it('should list a SINGLE blob on /blob/<id> GET');
//   it('should add a SINGLE blob on /blobs POST');
//   it('should update a SINGLE blob on /blob/<id> PUT');
//   it('should delete a SINGLE blob on /blob/<id> DELETE');
// });

// expect(foo).to.be.a('string');
// expect(foo).to.equal('bar');
// expect(foo).to.have.lengthOf(3);
// expect(beverages).to.have.property('tea').with.lengthOf(3);