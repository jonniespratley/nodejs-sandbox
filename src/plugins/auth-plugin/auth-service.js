'use strict';
module.exports = function (db, Logger) {
    var log = Logger.getLogger('auth-service');
    var users = db.sublevel('users');
    var AuthService = {};

    AuthService.register = function (user, callback) {
        log('register', user);
        users.put(user.username, user, function (err, resp) {
            callback(err, resp);
        });
    };

    AuthService.login = function (user, callback) {
        log('login', user);
        users.get(user.username, user, function (err, resp) {
            callback(err, resp);
        });
    };

    AuthService.checkToken = function (token, callback) {
        log('checkToken', token);
        users.get(userData.username, function (err, resp) {
            log('checkToken.response', err, resp);
            callback(err, user);
        });
    };

    AuthService.logout = function (user, callback) {
        log('logout', user);
        callback(null, user);
    };

    return AuthService;
};
