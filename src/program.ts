'use strict';
const App = require('./app').default;
const Logger = require('./plugins/logger').default;
const DiContainer = require('./plugins/di-container').default;
/**
 * Program class provides the glue for the main application.
 * @class Program
 *
 */
export default class Program extends DiContainer {
    modules:any;
    initialized:boolean;
    options:any;
    plugins:any;
    logger:any;

    constructor(options:any) {
        super('program', options);
        this.initialized = false;
        this.plugins = {};

        options = options || {
                namespace: 'nodejs-sandbox',
                dbName: 'data'
            };
        this.options = options;
        this.namespace = options.namespace;
        this.dbName = options.dbName;
        this.logger = new Logger(options.namespace).getLogger('Program');

        this.app = new App(options);
        super.register('app', this.app);
        super.register('namespace', this.namespace);
        super.register('dbName', this.dbName);
        super.register('program', this);

        super.plugin('Logger', require('./plugins/logger').default);
        super.plugin('db', require('./plugins/db-plugin').default);

        this.logger('constructor', options);
        if (options.run) {
            this.run(options.run);
        }
    }

    /**
     * This method initializes the program and invokes the callback when complete.
     * @function
     * @param {Function} callback The callback function to invoke.
     */
    run(callback) {
        this.initialized = true;
        this.logger('run');
        if (callback) {
            callback(this);
        }
    }

    /**
     * This method injects all plugin dependencies.
     * @function
     * @param {Object} plugin The plugin module.
     * @returns {Program}
     */
    use(plugin) {
        this.logger('use', plugin.name, plugin);
        this.plugins[plugin.name] = plugin;
        super.inject(plugin);
        return this;
    }
}
