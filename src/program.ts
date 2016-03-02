'use strict';
const App = require('./app');
const DiContainer = require('./plugins/di-container');

export default class Program extends DiContainer {
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
