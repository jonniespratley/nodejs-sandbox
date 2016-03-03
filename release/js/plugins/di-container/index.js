'use strict';
var argsList = require('args-list');
var debug = require('debug');
var path = require('path');
var getLogger = function (name) {
    return debug('nodejs:' + name);
};
var log = getLogger('DIContainer');
var dependencies = {};
var factories = {};
/**
 * @class DIContainer
 * @description This class handles auto loading module dependencies as a DI container.
 * Modules must be registered before used.
 * @example
 *
 var diContainer = new DIContainer();
 diContainer.register('config', {name: 'value');

 var MyDb = function (config) {
    class MyDb {
        constructor(c) {
            console.warn('You injected', c);
        }

        find(id) {
            console.warn('Find by', id);
        }
    }
    return new MyDb(config);
}

diContainer.factory('MyDb', MyDb);
var db = diContainer.get('MyDb');
assert(db.find);
 */
var DIContainer = (function () {
    function DIContainer(name) {
        this.name = name;
        this.modules = new Map();
    }
    DIContainer.prototype._register = function (key, val) {
        log('register =>', key);
        this.modules.set(key, val);
        return this;
    };
    /**
     * factory() is used to associate a component name against a factory.
     * @param name
     * @param factory
     */
    DIContainer.prototype.factory = function (name, factory) {
        factories[name] = factory;
        return this._register(name, factory);
    };
    /**
     * register() is used to associate a component name directly with an instance.
     * @param name
     * @param dep
     */
    DIContainer.prototype.register = function (name, dep) {
        dependencies[name] = dep;
        return this._register(name, dep);
    };
    DIContainer.prototype.plugin = function (name, factory) {
        return this.factory(name, factory);
    };
    DIContainer.prototype.controller = function (name, factory) {
        return this.factory(name, factory);
    };
    DIContainer.prototype.model = function (name, factory) {
        return this.factory(name, factory);
    };
    DIContainer.prototype.service = function (name, factory) {
        return this.register(name, factory);
    };
    DIContainer.prototype.value = function (key, val) {
        return this.register(key, val);
    };
    /**
     * get() retrieves a component by its name.
     * If an instance is already available, it simply returns it; otherwise, it tries to invoke the registered factory to obtain a new instance.
     * It is very important to observe that the module factories are invoked by injecting the current instance of the service locator (serviceLocator).
     * This is the core mechanism of the pattern that allows the dependency graph for our system to be built automatically and on-demand. We will see how this works in a moment.
     * @param name
     * @returns {*}
     */
    DIContainer.prototype.get = function (name) {
        var self = this;
        var factory;
        log('get', name);
        if (!dependencies[name]) {
            factory = factories[name];
            dependencies[name] = factory && self.inject(factory);
            if (!dependencies[name]) {
                log('get.error', "Cannot find dependency: " + name);
                throw new Error("Cannot find dependency: " + name);
            }
        }
        return dependencies[name];
    };
    /**
     * Inject arguments
     * @param factory - The factory module
     * @returns {*}
     */
    DIContainer.prototype.inject = function (factory) {
        var self = this;
        var args = argsList(factory).map(function (dependency) {
            log('inject =>', dependency);
            return self.get(dependency);
        });
        if (factory) {
            log(args.length, 'dependencies');
            return factory.apply(null, args);
        }
        else {
            log('inject.error', "Cannot inject dependency: " + factory);
            throw new Error("Cannot inject dependency: " + factory);
        }
    };
    DIContainer.module = function (name) {
        log('DIContainer.module', name);
        return new DIContainer(name);
    };
    return DIContainer;
}());
exports["default"] = DIContainer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL2RpLWNvbnRhaW5lci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDdEMsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QixJQUFJLFNBQVMsR0FBRyxVQUFVLElBQUk7SUFDMUIsTUFBTSxDQUFDLEtBQUssQ0FBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFDO0FBQ0YsSUFBTSxHQUFHLEdBQUcsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRXJDLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztBQUN0QixJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFFbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5Qkc7QUFDSDtJQUVJLHFCQUFZLElBQUk7UUFDWixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELCtCQUFTLEdBQVQsVUFBVSxHQUFHLEVBQUUsR0FBRztRQUNkLEdBQUcsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCw2QkFBTyxHQUFQLFVBQVEsSUFBSSxFQUFFLE9BQU87UUFDakIsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQztRQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCw4QkFBUSxHQUFSLFVBQVMsSUFBSSxFQUFFLEdBQUc7UUFDZCxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsNEJBQU0sR0FBTixVQUFPLElBQUksRUFBRSxPQUFPO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsZ0NBQVUsR0FBVixVQUFXLElBQUksRUFBRSxPQUFPO1FBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsMkJBQUssR0FBTCxVQUFNLElBQUksRUFBRSxPQUFPO1FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCw2QkFBTyxHQUFQLFVBQVEsSUFBSSxFQUFFLE9BQU87UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCwyQkFBSyxHQUFMLFVBQU0sR0FBRyxFQUFFLEdBQUc7UUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCx5QkFBRyxHQUFILFVBQUksSUFBSTtRQUNKLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLE9BQU8sQ0FBQztRQUVaLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakIsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE9BQU8sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUIsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRXJELEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsR0FBRyxDQUFDLFdBQVcsRUFBRSw2QkFBMkIsSUFBTSxDQUFDLENBQUM7Z0JBQ3BELE1BQU0sSUFBSSxLQUFLLENBQUMsNkJBQTJCLElBQU0sQ0FBQyxDQUFDO1lBQ3ZELENBQUM7UUFDTCxDQUFDO1FBQ0QsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILDRCQUFNLEdBQU4sVUFBTyxPQUFPO1FBQ1YsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxVQUFVO1lBQ2pELEdBQUcsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ1YsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7WUFDakMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLEdBQUcsQ0FBQyxjQUFjLEVBQUUsK0JBQTZCLE9BQVMsQ0FBQyxDQUFDO1lBQzVELE1BQU0sSUFBSSxLQUFLLENBQUMsK0JBQTZCLE9BQVMsQ0FBQyxDQUFDO1FBQzVELENBQUM7SUFDTCxDQUFDO0lBQ00sa0JBQU0sR0FBYixVQUFjLElBQUk7UUFDZCxHQUFHLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEMsTUFBTSxDQUFDLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDTCxrQkFBQztBQUFELENBdEdBLEFBc0dDLElBQUE7QUF0R0QsZ0NBc0dDLENBQUEiLCJmaWxlIjoicGx1Z2lucy9kaS1jb250YWluZXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
