module.exports.createSession = (req, res, next) => {

  // console.log('Create Session, session: ', req.cookies);
  // console.log('Create Session, session: ', req.sessions);

  Promise.resolve(req.cookies.shortlyid)
  .then((hash) => {
    if (!hash){throw hash;}
    return models.Sessions.get({hash});
  })
  .tap( (session) => {
    if(!session) {
      throw session;
    }
  })
  .catch(() =>{
    return models.Sessions.create()
      .then((results) => {

    // console.log(results, 'dsafdasvajhdksfjel;asfj')
        return models.Sessions.get({id: results.insertId});
      })
      .tap((results) => {
        res.cookie('shortlyid', results.hash);
      });
  })
  .then((results) => {
    req.session = results;
    next();
  });

  module.exports.isAuth = (req, res, next) => {

  if (models.Sessions.isLoggedIn(req.session)) {
    next();
  } else {
    res.redirect('/login');
  }
};
