const jwt = require('jsonwebtoken');
const config = require('../config/config.js');


verifyToken = (req, res, next) => {
  let token = req.headers['x-access-token'];

  if (!token) {
    return res.status(403).send({
      auth: false,
      message: 'UnAuthorized Access'
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(500).send({
        auth: false,
        message: 'Failed To Authenticate. Error: ' + err
      });
    }
    req.userId = decoded.id;
    next();
  })
}
const authJwt = {};
authJwt.verifyToken = verifyToken;

module.exports = authJwt;