'use strict';
module.exports = function(Logger, AuthService) {
  var log = Logger.getLogger('auth-controller');
  var AuthController = {};

  AuthController.register = function(req, res, next) {
    log('register', req.body);
    AuthService.register(req.body, function(err, result) {
      if (err) {
        res.status(400).json(err);
      }
      res.status(201).json(result);
    });
  };

  AuthController.login = function(req, res, next) {
    log('login', req.body);
    AuthService.login(req.body, function(err, result) {
      if (err) {
        res.status(404).json(err);
      }
      res.status(200).json(result);
    });
  };

  AuthController.checkToken = function(req, res, next) {
    AuthService.checkToken(req.query.token, function(err, result) {
      if (err) {
        res.status(404).json(err);
      }
      res.status(200).json(result);
    });
  };

  return AuthController;

};
