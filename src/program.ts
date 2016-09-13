'use strict';
const App = require('./app').default;
const Logger = require('./plugins/logger').default;
const DiContainer = require('./plugins/di-container').default;
/**
 * Program class provides the glue for the main application.
 * @class Program
 *
 */
 const log = require('debug')(`nodejs-sandbox:program`);
export default class Program extends DiContainer {
    modules: any;
    initialized: boolean;
    options: any;
    plugins: any;
    logger: any;
    constructor(options: any) {
        super('program', options);
        this.initialized = false;
        this.plugins = {};

        options = options || {
            namespace: 'nodejs-sandbox',
            dbName: 'data'
        };
        this.options = options;

        this.dbName = options.dbName;
        this.logger = log || new Logger(options.namespace || 'nodejs-sandbox').getLogger('program');

        this.app = new App(options);
        super.register('app', this.app);
        super.register('namespace', options.namespace);
        super.register('name', 'program');
        super.register('dbName', this.dbName);
        super.register('program', this);

        super.register('Logger', require('./plugins/logger').default);
        super.register('db', require('./plugins/db-plugin').default);

      //  this.logger.info('constructor', options);
        if (options.run) {
            this.run(options.run);
        }
    }

    /**
     * Initializes the program and invokes the callback when complete.
     * @function
     * @param {Function} callback The callback function to invoke.
     */
    run(callback) {
        console.log('Loading plugins', this.options.plugins);
        if (this.options.plugins) {
            this.options.plugins.forEach((p) => {
              this.use(p);
            });
        }
        this.initialized = true;
        console.log('run', this.options);
        if (callback) {
            this.logger('run.callback');
            return callback(this);
        }
        return this;
    }

    /**
     * Injects all plugin dependencies.
     * @function
     * @param {Object} plugin The plugin module.
     * @returns {Program}
     */
    use(plugin) {
        console.log('use', plugin.name, plugin);
        this.plugins[plugin.name] = plugin;
        super.inject(plugin);
        return this;
    }
}
