'use strict';
module.exports = function(app) {
  //app.post('/register', authController.register);
  //app.post('/login', authController.login);
  //app.get('/checkToken', authController.checkToken);
  return {
    Controller: require('./auth-controller'),
    Service: require('./auth-service')
  };
};
