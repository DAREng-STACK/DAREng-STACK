

var checkUsername = (data) => {
  db.query({data}, (err, res) => {
    if(err){
      res.redirect('/login');
    }else{
      res.send(data);
    };
  })
}

module.exports.checkusername = checkUsername;
module.exports.addGeoLocation = addGeoLocation;
