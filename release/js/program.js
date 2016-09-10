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
        this.logger = new Logger(options.namespace).getLogger('Program');
        this.app = new App(options);
        _super.prototype.register.call(this, 'app', this.app);
        _super.prototype.register.call(this, 'namespace', this.namespace);
        _super.prototype.register.call(this, 'dbName', this.dbName);
        _super.prototype.register.call(this, 'program', this);
        _super.prototype.plugin.call(this, 'Logger', require('./plugins/logger').default);
        _super.prototype.plugin.call(this, 'db', require('./plugins/db-plugin').default);
        this.logger('constructor', options);
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
        this.initialized = true;
        this.logger('run', this.options);
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
        this.logger('use', plugin.name, plugin);
        this.plugins[plugin.name] = plugin;
        _super.prototype.inject.call(this, plugin);
        return this;
    };
    return Program;
}(DiContainer));
exports["default"] = Program;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wcm9ncmFtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7O0FBQ2IsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUNyQyxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDbkQsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUMsT0FBTyxDQUFDO0FBQzlEOzs7O0dBSUc7QUFDSDtJQUFxQywyQkFBVztJQU01QyxpQkFBWSxPQUFXO1FBQ25CLGtCQUFNLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUVsQixPQUFPLEdBQUcsT0FBTyxJQUFJO1lBQ2IsU0FBUyxFQUFFLGdCQUFnQjtZQUMzQixNQUFNLEVBQUUsTUFBTTtTQUNqQixDQUFDO1FBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFakUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixnQkFBSyxDQUFDLFFBQVEsWUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLGdCQUFLLENBQUMsUUFBUSxZQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUMsZ0JBQUssQ0FBQyxRQUFRLFlBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxnQkFBSyxDQUFDLFFBQVEsWUFBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFaEMsZ0JBQUssQ0FBQyxNQUFNLFlBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVELGdCQUFLLENBQUMsTUFBTSxZQUFDLElBQUksRUFBRSxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUzRCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNwQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHFCQUFHLEdBQUgsVUFBSSxRQUFRO1FBQ1IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gscUJBQUcsR0FBSCxVQUFJLE1BQU07UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUNuQyxnQkFBSyxDQUFDLE1BQU0sWUFBQyxNQUFNLENBQUMsQ0FBQztRQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0E5REEsQUE4REMsQ0E5RG9DLFdBQVcsR0E4RC9DO0FBOURELDRCQThEQyxDQUFBIiwiZmlsZSI6InByb2dyYW0uanMiLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
