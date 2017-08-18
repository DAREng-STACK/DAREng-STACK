describe('postimage', function() {
  it('adding a photo should be successful', function() {
    // An intentionally failing test. No code within expect() will never equal 4.
    expect(this.uploadPic()).toEqual(4);
  });
});