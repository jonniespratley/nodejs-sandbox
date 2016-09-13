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
var log = require('debug')("nodejs-sandbox:program");
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
        this.dbName = options.dbName;
        this.logger = log || new Logger(options.namespace || 'nodejs-sandbox').getLogger('program');
        this.app = new App(options);
        _super.prototype.register.call(this, 'app', this.app);
        _super.prototype.register.call(this, 'namespace', options.namespace);
        _super.prototype.register.call(this, 'name', 'program');
        _super.prototype.register.call(this, 'dbName', this.dbName);
        _super.prototype.register.call(this, 'program', this);
        _super.prototype.register.call(this, 'Logger', require('./plugins/logger').default);
        _super.prototype.register.call(this, 'db', require('./plugins/db-plugin').default);
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
    Program.prototype.run = function (callback) {
        var _this = this;
        console.log('Loading plugins', this.options.plugins);
        if (this.options.plugins) {
            this.options.plugins.forEach(function (p) {
                _this.use(p);
            });
        }
        this.initialized = true;
        console.log('run', this.options);
        if (callback) {
            this.logger('run.callback');
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
        console.log('use', plugin.name, plugin);
        this.plugins[plugin.name] = plugin;
        _super.prototype.inject.call(this, plugin);
        return this;
    };
    return Program;
}(DiContainer));
exports["default"] = Program;

//# sourceMappingURL=data:application/json;base64,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akMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDNUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxxQkFBRyxHQUFILFVBQUksTUFBTTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQ25DLGdCQUFLLENBQUMsTUFBTSxZQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQXJFQSxBQXFFQyxDQXJFb0MsV0FBVyxHQXFFL0M7QUFyRUQsNEJBcUVDLENBQUEiLCJmaWxlIjoicHJvZ3JhbS5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
