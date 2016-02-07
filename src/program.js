var app = require('./app');
var program = require('./plugins/di-container')('program');

program.register('app', app);
program.register('program', program);
program.register('namespace', 'sandbox');
program.register('dbName', 'db');
program.register('tokenSecret', 'SHHH!');

//program.plugin('serviceLocator', require('./plugins/server-locator'));
program.plugin('Logger', require('./plugins/logger'));
program.plugin('db', require('./plugins/db-plugin'));

//var AppPlugin = require('./plugins/app-plugin');
//var AuthPlugin = require('./plugins/auth-plugin');

//program.plugin('AuthPlugin', require('./plugins/auth-plugin'));
//program.plugin('AuthService', AuthPlugin.Service);
//program.factory('AuthController', authControllerFactory);

//program.plugin('AuthController', require('./plugins/auth-plugin/auth-controller'));
//var authController = program.get('AuthController');
//var authService = require('./auth-service');
//var authController = require('./auth-controller');
//plugin(app, authService, authController, db);

//App plugins
//require('./plugins/app-plugin')(app);
//program.inject(require('./plugins/app-plugin'));
//program.inject(require('./plugins/auth-plugin'));
//program.inject(require('./plugins/blog-plugin'));


//IoC plugins
//var plugin = require('./plugins/ioc-plugin')();
//app[plugin.method](plugin.route, plugin.handler);
module.exports = program;