'use strict';
const debug = require('debug');
const log = debug('nodejs-sandbox:app');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');

var routes = require('./routes');
var asyncModule = require('./asyncModule');

const PORT = 8000;
asyncModule.initialize(function() {
  log('asyncModule.js initialized');
});



var diContainer = require('./plugins/di-container')();
var AuthPlugin = require('./plugins/auth-plugin');
var authServiceFactory = AuthPlugin.Service;
var authControllerFactory = AuthPlugin.Controller;

diContainer.register('diContainer', diContainer);
diContainer.register('namespace', 'nodejs-sandbox');
diContainer.register('dbName', 'example-db');
diContainer.register('tokenSecret', 'SHHH!');

diContainer.plugin('Logger', require('./plugins/logger'));
diContainer.plugin('db', require('./plugins/db'));
diContainer.plugin('AuthPlugin', AuthPlugin);
diContainer.plugin('AuthService', AuthPlugin.Service);
//diContainer.plugin('AuthController', require('./plugins/auth-plugin/auth-controller'));

var authController = diContainer.get('AuthPlugin').Controller;
var app = module.exports = express();


app.use(bodyParser.json());
app.post('/register', authController.register);
app.post('/login', authController.login);
app.get('/checkToken', authController.checkToken);
app.use(errorHandler());

http.createServer(app).listen(PORT, function() {
  log('Express server started');
});
