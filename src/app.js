'use strict';
const debug = require('debug');
const log = debug('nodejs-sandbox:app');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');


const PORT = 8000;


var routes = require('./routes');
var asyncModule = require('./asyncModule');


asyncModule.initialize(function() {
  log('asyncModule.js initialized');
});

var program = require('./plugins/di-container')('app');
var app = module.exports = express();
app.use(bodyParser.json());
app.use(errorHandler());



program.register('app', app);
program.register('program', program);
program.register('namespace', 'sandbox');
program.register('dbName', 'example-db');
program.register('tokenSecret', 'SHHH!');

program.plugin('Logger', require('./plugins/logger'));
program.plugin('db', require('./plugins/db'));

//var AuthPlugin = require('./plugins/auth-plugin');
//program.plugin('AuthPlugin', require('./plugins/auth-plugin'));
//program.plugin('AuthService', AuthPlugin.Service);
//program.factory('AuthController', authControllerFactory);

//program.plugin('AuthController', require('./plugins/auth-plugin/auth-controller'));
//var authController = program.get('AuthController');

//App plugins
//require('./plugins/app-plugin')(app);
program.inject(require('./plugins/app-plugin'));

//IoC plugins
var plugin = require('./plugins/ioc-plugin')();
app[plugin.method](plugin.route, plugin.handler);

http.createServer(app).listen(PORT, function() {
  log('Express server started on port', PORT);
});
