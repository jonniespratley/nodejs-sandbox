'use strict';
'use strict';
const express = require('express');
const bodyParser = require('body-parser');

/**
 * @class         AuthPlugin
 * @module        AuthPlugin
 *
 * @example
 * app = express();
 * instance = new AuthPlugin(app);
 */
module.exports = function (program) {
    var serviceLocator = program;


    program.factory('AuthController', require('./auth-controller'));
    program.factory('AuthService', require('./auth-service'));

    var authService = serviceLocator.get('AuthService');
    var authController = serviceLocator.get('AuthController');


    var authRouter = express();
    var db = serviceLocator.get('db');
    var app = program.get('app');

    var tokensDb = db.sublevel('tokens');


    authRouter.post('/register', bodyParser.json(), authController.register);
    authRouter.post('/login', bodyParser.json(), authController.login);
    authRouter.get('/logout', authController.logout);

    app.use('/', authRouter);


    console.log(app.path());
    console.log(authRouter.path());


    return {
        Controller: authController,
        Service: authService
    };
};
/*
 module.exports = function (program, app) {

 program.register('AuthService', require('./auth-service'))
 program.register('AuthController', require('./auth-controller'))

 var authService = program.get('AuthService');
 var authController = program.get('AuthController');

 console.log(program);
 // app.post('/register', authController.register);
 // app.post('/login', authController.login);
 // app.get('/checkToken', authController.checkToken);


 };
 */
