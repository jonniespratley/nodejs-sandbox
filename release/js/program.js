'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var App = require('./app').default;
var Logger = require('./plugins/logger').default;
var DiContainer = require('./plugins/di-container').default;
/**
 * Program class provides the glue for the main application.
 * @class Program
 *
 */
var Program = (function (_super) {
    __extends(Program, _super);
    function Program(options) {
        _super.call(this, 'program', options);
        this.initialized = false;
        this.plugins = {};
        options = options || {
            namespace: 'nodejs-sandbox',
            dbName: 'data'
        };
        this.options = options;
        this.namespace = options.namespace;
        this.dbName = options.dbName;
        this.logger = new Logger(options.namespace || 'nodejs-sandbox').getLogger('program');
        this.app = new App(options);
        _super.prototype.register.call(this, 'app', this.app);
        _super.prototype.register.call(this, 'namespace', this.namespace);
        _super.prototype.register.call(this, 'dbName', this.dbName);
        _super.prototype.register.call(this, 'program', this);
        _super.prototype.plugin.call(this, 'Logger', require('./plugins/logger').default);
        _super.prototype.plugin.call(this, 'db', require('./plugins/db-plugin').default);
        this.logger.info('constructor', options);
        if (options.run) {
            this.run(options.run);
        }
    }
    /**
     * Initializes the program and invokes the callback when complete.
     * @function
     * @param {Function} callback The callback function to invoke.
     */
    Program.prototype.run = function (callback) {
        console.log('Loading plugins', this.options.plugins);
        if (this.options.plugins) {
            this.options.plugins.forEach(function (p) {
            });
        }
        this.initialized = true;
        this.logger.info('run', this.options);
        if (callback) {
            this.logger.info('run.callback');
            return callback(this);
        }
        return this;
    };
    /**
     * Injects all plugin dependencies.
     * @function
     * @param {Object} plugin The plugin module.
     * @returns {Program}
     */
    Program.prototype.use = function (plugin) {
        this.logger.info('use', plugin.name, plugin);
        this.plugins[plugin.name] = plugin;
        _super.prototype.inject.call(this, plugin);
        return this;
    };
    return Program;
}(DiContainer));
exports.__esModule = true;
exports["default"] = Program;

//# sourceMappingURL=data:application/json;base64,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QUFjLENBQUMsQ0FBQztZQUNuQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILHFCQUFHLEdBQUgsVUFBSSxNQUFNO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQ25DLGdCQUFLLENBQUMsTUFBTSxZQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQXBFQSxBQW9FQyxDQXBFb0MsV0FBVyxHQW9FL0M7QUFwRUQ7NEJBb0VDLENBQUEiLCJmaWxlIjoicHJvZ3JhbS5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
