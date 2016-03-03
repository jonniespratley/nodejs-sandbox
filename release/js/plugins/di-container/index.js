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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbnMvZGktY29udGFpbmVyL2luZGV4LnRzIl0sIm5hbWVzIjpbIkRJQ29udGFpbmVyIiwiRElDb250YWluZXIuY29uc3RydWN0b3IiLCJESUNvbnRhaW5lci5fcmVnaXN0ZXIiLCJESUNvbnRhaW5lci5mYWN0b3J5IiwiRElDb250YWluZXIucmVnaXN0ZXIiLCJESUNvbnRhaW5lci5wbHVnaW4iLCJESUNvbnRhaW5lci5jb250cm9sbGVyIiwiRElDb250YWluZXIubW9kZWwiLCJESUNvbnRhaW5lci5zZXJ2aWNlIiwiRElDb250YWluZXIudmFsdWUiLCJESUNvbnRhaW5lci5nZXQiLCJESUNvbnRhaW5lci5pbmplY3QiLCJESUNvbnRhaW5lci5tb2R1bGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN0QyxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0IsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLElBQUksU0FBUyxHQUFHLFVBQVUsSUFBSTtJQUMxQixNQUFNLENBQUMsS0FBSyxDQUFFLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUNwQyxDQUFDLENBQUM7QUFDRixJQUFNLEdBQUcsR0FBRyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7QUFFckMsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUVuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlCRztBQUNIO0lBRUlBLHFCQUFZQSxJQUFJQTtRQUNaQyxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUNqQkEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsR0FBR0EsRUFBRUEsQ0FBQ0E7SUFDN0JBLENBQUNBO0lBRURELCtCQUFTQSxHQUFU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IiwiZmlsZSI6InBsdWdpbnMvZGktY29udGFpbmVyL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuY29uc3QgYXJnc0xpc3QgPSByZXF1aXJlKCdhcmdzLWxpc3QnKTtcbmNvbnN0IGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG52YXIgZ2V0TG9nZ2VyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gZGVidWcoICdub2RlanM6JyArIG5hbWUpO1xufTtcbmNvbnN0IGxvZyA9IGdldExvZ2dlcignRElDb250YWluZXInKTtcblxudmFyIGRlcGVuZGVuY2llcyA9IHt9O1xudmFyIGZhY3RvcmllcyA9IHt9O1xuXG4vKipcbiAqIEBjbGFzcyBESUNvbnRhaW5lclxuICogQGRlc2NyaXB0aW9uIFRoaXMgY2xhc3MgaGFuZGxlcyBhdXRvIGxvYWRpbmcgbW9kdWxlIGRlcGVuZGVuY2llcyBhcyBhIERJIGNvbnRhaW5lci5cbiAqIE1vZHVsZXMgbXVzdCBiZSByZWdpc3RlcmVkIGJlZm9yZSB1c2VkLlxuICogQGV4YW1wbGVcbiAqXG4gdmFyIGRpQ29udGFpbmVyID0gbmV3IERJQ29udGFpbmVyKCk7XG4gZGlDb250YWluZXIucmVnaXN0ZXIoJ2NvbmZpZycsIHtuYW1lOiAndmFsdWUnKTtcblxuIHZhciBNeURiID0gZnVuY3Rpb24gKGNvbmZpZykge1xuXHRjbGFzcyBNeURiIHtcblx0XHRjb25zdHJ1Y3RvcihjKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJ1lvdSBpbmplY3RlZCcsIGMpO1xuXHRcdH1cblxuXHRcdGZpbmQoaWQpIHtcblx0XHRcdGNvbnNvbGUud2FybignRmluZCBieScsIGlkKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIG5ldyBNeURiKGNvbmZpZyk7XG59XG5cbmRpQ29udGFpbmVyLmZhY3RvcnkoJ015RGInLCBNeURiKTtcbnZhciBkYiA9IGRpQ29udGFpbmVyLmdldCgnTXlEYicpO1xuYXNzZXJ0KGRiLmZpbmQpO1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBESUNvbnRhaW5lciB7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubW9kdWxlcyA9IG5ldyBNYXAoKTtcbiAgICB9XG5cbiAgICBfcmVnaXN0ZXIoa2V5LCB2YWwpIHtcbiAgICAgICAgbG9nKCdyZWdpc3RlciA9PicsIGtleSk7XG4gICAgICAgIHRoaXMubW9kdWxlcy5zZXQoa2V5LCB2YWwpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBmYWN0b3J5KCkgaXMgdXNlZCB0byBhc3NvY2lhdGUgYSBjb21wb25lbnQgbmFtZSBhZ2FpbnN0IGEgZmFjdG9yeS5cbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEBwYXJhbSBmYWN0b3J5XG4gICAgICovXG4gICAgZmFjdG9yeShuYW1lLCBmYWN0b3J5KSB7XG4gICAgICAgIGZhY3Rvcmllc1tuYW1lXSA9IGZhY3Rvcnk7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWdpc3RlcihuYW1lLCBmYWN0b3J5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZWdpc3RlcigpIGlzIHVzZWQgdG8gYXNzb2NpYXRlIGEgY29tcG9uZW50IG5hbWUgZGlyZWN0bHkgd2l0aCBhbiBpbnN0YW5jZS5cbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEBwYXJhbSBkZXBcbiAgICAgKi9cbiAgICByZWdpc3RlcihuYW1lLCBkZXApIHtcbiAgICAgICAgZGVwZW5kZW5jaWVzW25hbWVdID0gZGVwO1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVnaXN0ZXIobmFtZSwgZGVwKTtcbiAgICB9XG5cbiAgICBwbHVnaW4obmFtZSwgZmFjdG9yeSkge1xuICAgICAgICByZXR1cm4gdGhpcy5mYWN0b3J5KG5hbWUsIGZhY3RvcnkpO1xuICAgIH1cblxuICAgIGNvbnRyb2xsZXIobmFtZSwgZmFjdG9yeSkge1xuICAgICAgICByZXR1cm4gdGhpcy5mYWN0b3J5KG5hbWUsIGZhY3RvcnkpO1xuICAgIH1cblxuICAgIG1vZGVsKG5hbWUsIGZhY3RvcnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmFjdG9yeShuYW1lLCBmYWN0b3J5KTtcbiAgICB9XG5cbiAgICBzZXJ2aWNlKG5hbWUsIGZhY3RvcnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXIobmFtZSwgZmFjdG9yeSk7XG4gICAgfVxuXG4gICAgdmFsdWUoa2V5LCB2YWwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXIoa2V5LCB2YWwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGdldCgpIHJldHJpZXZlcyBhIGNvbXBvbmVudCBieSBpdHMgbmFtZS5cbiAgICAgKiBJZiBhbiBpbnN0YW5jZSBpcyBhbHJlYWR5IGF2YWlsYWJsZSwgaXQgc2ltcGx5IHJldHVybnMgaXQ7IG90aGVyd2lzZSwgaXQgdHJpZXMgdG8gaW52b2tlIHRoZSByZWdpc3RlcmVkIGZhY3RvcnkgdG8gb2J0YWluIGEgbmV3IGluc3RhbmNlLlxuICAgICAqIEl0IGlzIHZlcnkgaW1wb3J0YW50IHRvIG9ic2VydmUgdGhhdCB0aGUgbW9kdWxlIGZhY3RvcmllcyBhcmUgaW52b2tlZCBieSBpbmplY3RpbmcgdGhlIGN1cnJlbnQgaW5zdGFuY2Ugb2YgdGhlIHNlcnZpY2UgbG9jYXRvciAoc2VydmljZUxvY2F0b3IpLlxuICAgICAqIFRoaXMgaXMgdGhlIGNvcmUgbWVjaGFuaXNtIG9mIHRoZSBwYXR0ZXJuIHRoYXQgYWxsb3dzIHRoZSBkZXBlbmRlbmN5IGdyYXBoIGZvciBvdXIgc3lzdGVtIHRvIGJlIGJ1aWx0IGF1dG9tYXRpY2FsbHkgYW5kIG9uLWRlbWFuZC4gV2Ugd2lsbCBzZWUgaG93IHRoaXMgd29ya3MgaW4gYSBtb21lbnQuXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXQobmFtZSkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBmYWN0b3J5O1xuXG4gICAgICAgIGxvZygnZ2V0JywgbmFtZSk7XG4gICAgICAgIGlmICghZGVwZW5kZW5jaWVzW25hbWVdKSB7XG4gICAgICAgICAgICBmYWN0b3J5ID0gZmFjdG9yaWVzW25hbWVdO1xuICAgICAgICAgICAgZGVwZW5kZW5jaWVzW25hbWVdID0gZmFjdG9yeSAmJiBzZWxmLmluamVjdChmYWN0b3J5KTtcblxuICAgICAgICAgICAgaWYgKCFkZXBlbmRlbmNpZXNbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICBsb2coJ2dldC5lcnJvcicsIGBDYW5ub3QgZmluZCBkZXBlbmRlbmN5OiAke25hbWV9YCk7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZmluZCBkZXBlbmRlbmN5OiAke25hbWV9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlcGVuZGVuY2llc1tuYW1lXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmplY3QgYXJndW1lbnRzXG4gICAgICogQHBhcmFtIGZhY3RvcnkgLSBUaGUgZmFjdG9yeSBtb2R1bGVcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBpbmplY3QoZmFjdG9yeSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBhcmdzID0gYXJnc0xpc3QoZmFjdG9yeSkubWFwKGZ1bmN0aW9uIChkZXBlbmRlbmN5KSB7XG4gICAgICAgICAgICBsb2coJ2luamVjdCA9PicsIGRlcGVuZGVuY3kpO1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYuZ2V0KGRlcGVuZGVuY3kpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZmFjdG9yeSkge1xuICAgICAgICAgICAgbG9nKGFyZ3MubGVuZ3RoLCAnZGVwZW5kZW5jaWVzJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFjdG9yeS5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvZygnaW5qZWN0LmVycm9yJywgYENhbm5vdCBpbmplY3QgZGVwZW5kZW5jeTogJHtmYWN0b3J5fWApO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgaW5qZWN0IGRlcGVuZGVuY3k6ICR7ZmFjdG9yeX1gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgbW9kdWxlKG5hbWUpIHtcbiAgICAgICAgbG9nKCdESUNvbnRhaW5lci5tb2R1bGUnLCBuYW1lKTtcbiAgICAgICAgcmV0dXJuIG5ldyBESUNvbnRhaW5lcihuYW1lKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
