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
})();
exports["default"] = DIContainer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL2RpLWNvbnRhaW5lci9pbmRleC50cyJdLCJuYW1lcyI6WyJESUNvbnRhaW5lciIsIkRJQ29udGFpbmVyLmNvbnN0cnVjdG9yIiwiRElDb250YWluZXIuX3JlZ2lzdGVyIiwiRElDb250YWluZXIuZmFjdG9yeSIsIkRJQ29udGFpbmVyLnJlZ2lzdGVyIiwiRElDb250YWluZXIucGx1Z2luIiwiRElDb250YWluZXIuY29udHJvbGxlciIsIkRJQ29udGFpbmVyLm1vZGVsIiwiRElDb250YWluZXIuc2VydmljZSIsIkRJQ29udGFpbmVyLnZhbHVlIiwiRElDb250YWluZXIuZ2V0IiwiRElDb250YWluZXIuaW5qZWN0IiwiRElDb250YWluZXIubW9kdWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDdEMsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QixJQUFJLFNBQVMsR0FBRyxVQUFVLElBQUk7SUFDMUIsTUFBTSxDQUFDLEtBQUssQ0FBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFDO0FBQ0YsSUFBTSxHQUFHLEdBQUcsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRXJDLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztBQUN0QixJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFFbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5Qkc7QUFDSDtJQUVJQSxxQkFBWUEsSUFBSUE7UUFDWkMsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDakJBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLElBQUlBLEdBQUdBLEVBQUVBLENBQUNBO0lBQzdCQSxDQUFDQTtJQUVERCwrQkFBU0EsR0FBVEEsVUFBVUEsR0FBR0EsRUFBRUEsR0FBR0E7UUFDZEUsR0FBR0EsQ0FBQ0EsYUFBYUEsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDeEJBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO1FBQzNCQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtJQUNoQkEsQ0FBQ0E7SUFFREY7Ozs7T0FJR0E7SUFDSEEsNkJBQU9BLEdBQVBBLFVBQVFBLElBQUlBLEVBQUVBLE9BQU9BO1FBQ2pCRyxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxPQUFPQSxDQUFDQTtRQUMxQkEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBRUEsT0FBT0EsQ0FBQ0EsQ0FBQ0E7SUFDekNBLENBQUNBO0lBRURIOzs7O09BSUdBO0lBQ0hBLDhCQUFRQSxHQUFSQSxVQUFTQSxJQUFJQSxFQUFFQSxHQUFHQTtRQUNkSSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxHQUFHQSxDQUFDQTtRQUN6QkEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7SUFDckNBLENBQUNBO0lBRURKLDRCQUFNQSxHQUFOQSxVQUFPQSxJQUFJQSxFQUFFQSxPQUFPQTtRQUNoQkssTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsRUFBRUEsT0FBT0EsQ0FBQ0EsQ0FBQ0E7SUFDdkNBLENBQUNBO0lBRURMLGdDQUFVQSxHQUFWQSxVQUFXQSxJQUFJQSxFQUFFQSxPQUFPQTtRQUNwQk0sTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsRUFBRUEsT0FBT0EsQ0FBQ0EsQ0FBQ0E7SUFDdkNBLENBQUNBO0lBRUROLDJCQUFLQSxHQUFMQSxVQUFNQSxJQUFJQSxFQUFFQSxPQUFPQTtRQUNmTyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFDQTtJQUN2Q0EsQ0FBQ0E7SUFFRFAsNkJBQU9BLEdBQVBBLFVBQVFBLElBQUlBLEVBQUVBLE9BQU9BO1FBQ2pCUSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFDQTtJQUN4Q0EsQ0FBQ0E7SUFFRFIsMkJBQUtBLEdBQUxBLFVBQU1BLEdBQUdBLEVBQUVBLEdBQUdBO1FBQ1ZTLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLEdBQUdBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO0lBQ25DQSxDQUFDQTtJQUVEVDs7Ozs7OztPQU9HQTtJQUNIQSx5QkFBR0EsR0FBSEEsVUFBSUEsSUFBSUE7UUFDSlUsSUFBSUEsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDaEJBLElBQUlBLE9BQU9BLENBQUNBO1FBRVpBLEdBQUdBLENBQUNBLEtBQUtBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1FBQ2pCQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN0QkEsT0FBT0EsR0FBR0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDMUJBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLE9BQU9BLElBQUlBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO1lBRXJEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDdEJBLEdBQUdBLENBQUNBLFdBQVdBLEVBQUVBLDZCQUEyQkEsSUFBTUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3BEQSxNQUFNQSxJQUFJQSxLQUFLQSxDQUFDQSw2QkFBMkJBLElBQU1BLENBQUNBLENBQUNBO1lBQ3ZEQSxDQUFDQTtRQUNMQSxDQUFDQTtRQUNEQSxNQUFNQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUM5QkEsQ0FBQ0E7SUFFRFY7Ozs7T0FJR0E7SUFDSEEsNEJBQU1BLEdBQU5BLFVBQU9BLE9BQU9BO1FBQ1ZXLElBQUlBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1FBQ2hCQSxJQUFJQSxJQUFJQSxHQUFHQSxRQUFRQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxVQUFVQSxVQUFVQTtZQUNqRCxHQUFHLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQ0EsQ0FBQ0E7UUFFSEEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDVkEsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUEsY0FBY0EsQ0FBQ0EsQ0FBQ0E7WUFDakNBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO1FBQ3JDQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNKQSxHQUFHQSxDQUFDQSxjQUFjQSxFQUFFQSwrQkFBNkJBLE9BQVNBLENBQUNBLENBQUNBO1lBQzVEQSxNQUFNQSxJQUFJQSxLQUFLQSxDQUFDQSwrQkFBNkJBLE9BQVNBLENBQUNBLENBQUNBO1FBQzVEQSxDQUFDQTtJQUNMQSxDQUFDQTtJQUNNWCxrQkFBTUEsR0FBYkEsVUFBY0EsSUFBSUE7UUFDZFksR0FBR0EsQ0FBQ0Esb0JBQW9CQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUNoQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFDakNBLENBQUNBO0lBQ0xaLGtCQUFDQTtBQUFEQSxDQXRHQSxBQXNHQ0EsSUFBQTtBQXRHRCxnQ0FzR0MsQ0FBQSIsImZpbGUiOiJwbHVnaW5zL2RpLWNvbnRhaW5lci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
