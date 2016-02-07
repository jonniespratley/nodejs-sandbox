'use strict';
module.exports = function (program, app) {

    program.register( 'AuthService', require('./auth-service'))
    program.register( 'AuthController', require('./auth-controller'))

    var authService = program.get('AuthService');
    var authController = program.get('AuthController');

console.log(program);
   // app.post('/register', authController.register);
   // app.post('/login', authController.login);
   // app.get('/checkToken', authController.checkToken);

    return {
        Controller: authController,
        Service: authService
    };
};
