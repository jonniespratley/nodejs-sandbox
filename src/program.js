'use strict';
const App = require('./app');
const DiContainer = require('./plugins/di-container');

class Program extends DiContainer {
    constructor(options) {
        super('program');
        this.app = new App(options);
        this.register('app', this.app);
        this.register('program', this);
        this.register('namespace', 'sandbox');
        this.register('dbName', 'db');
        this.register('tokenSecret', 'SHHH!');

        //program.plugin('serviceLocator', require('./plugins/server-locator'));
        this.plugin('Logger', require('./plugins/logger'));
        this.plugin('db', require('./plugins/db-plugin'));
        if (options.run) {
            this.run(options.run);
        }

    }

    run(cb) {

        console.log('Program.run');
        if (cb) {
            cb(this);
        }
    }

    use(plugin) {
        console.log('Program.use');
        this.inject(plugin);
        return this;
    }
}


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
module.exports = Program;
