const user= require('./routes/user')
const jwt = require('jsonwebtoken');
module.exports=function(router){
    router.use('/user', user)
}
function validateUser(req, res, next) {
    console.log("req ",req)
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(err, decoded) {
      if (err) {
        res.json({status:"error", message: err.message, data:null});
      }else{
        // add user id to request
        req.body.userId = decoded.id;
        next();
      }
    });
  }
