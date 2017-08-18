var expect  = require('chai').expect;
var request = require('superagent');

describe("username", function() {
    it("post username and password upon signup", function(done) {
        request.post('localhost:4500/signup')
        .send({username: 'ryana', password: 'bandit'})
        .end(function(err,res){
            expect(res.status).to.equal(200)
            done();
        })
    });        
});
