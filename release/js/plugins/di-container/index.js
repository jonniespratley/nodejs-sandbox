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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbnMvZGktY29udGFpbmVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN0QyxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0IsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLElBQUksU0FBUyxHQUFHLFVBQVUsSUFBSTtJQUMxQixNQUFNLENBQUMsS0FBSyxDQUFFLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUNwQyxDQUFDLENBQUM7QUFDRixJQUFNLEdBQUcsR0FBRyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7QUFFckMsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUVuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlCRztBQUNIO0lBRUkscUJBQVksSUFBSTtRQUNaLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsK0JBQVMsR0FBVCxVQUFVLEdBQUcsRUFBRSxHQUFHO1FBQ2QsR0FBRyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILDZCQUFPLEdBQVAsVUFBUSxJQUFJLEVBQUUsT0FBTztRQUNqQixTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxPQUFP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QUNMLENBQUM7SUFDTSxrQkFBTSxHQUFiLFVBQWMsSUFBSTtRQUNkLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoQyxNQUFNLENBQUMsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0F0R0EsQUFzR0MsSUFBQTtBQXRHRCxnQ0FzR0MsQ0FBQSIsImZpbGUiOiJwbHVnaW5zL2RpLWNvbnRhaW5lci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmNvbnN0IGFyZ3NMaXN0ID0gcmVxdWlyZSgnYXJncy1saXN0Jyk7XG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJyk7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xudmFyIGdldExvZ2dlciA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIGRlYnVnKCAnbm9kZWpzOicgKyBuYW1lKTtcbn07XG5jb25zdCBsb2cgPSBnZXRMb2dnZXIoJ0RJQ29udGFpbmVyJyk7XG5cbnZhciBkZXBlbmRlbmNpZXMgPSB7fTtcbnZhciBmYWN0b3JpZXMgPSB7fTtcblxuLyoqXG4gKiBAY2xhc3MgRElDb250YWluZXJcbiAqIEBkZXNjcmlwdGlvbiBUaGlzIGNsYXNzIGhhbmRsZXMgYXV0byBsb2FkaW5nIG1vZHVsZSBkZXBlbmRlbmNpZXMgYXMgYSBESSBjb250YWluZXIuXG4gKiBNb2R1bGVzIG11c3QgYmUgcmVnaXN0ZXJlZCBiZWZvcmUgdXNlZC5cbiAqIEBleGFtcGxlXG4gKlxuIHZhciBkaUNvbnRhaW5lciA9IG5ldyBESUNvbnRhaW5lcigpO1xuIGRpQ29udGFpbmVyLnJlZ2lzdGVyKCdjb25maWcnLCB7bmFtZTogJ3ZhbHVlJyk7XG5cbiB2YXIgTXlEYiA9IGZ1bmN0aW9uIChjb25maWcpIHtcblx0Y2xhc3MgTXlEYiB7XG5cdFx0Y29uc3RydWN0b3IoYykge1xuXHRcdFx0Y29uc29sZS53YXJuKCdZb3UgaW5qZWN0ZWQnLCBjKTtcblx0XHR9XG5cblx0XHRmaW5kKGlkKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJ0ZpbmQgYnknLCBpZCk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBuZXcgTXlEYihjb25maWcpO1xufVxuXG5kaUNvbnRhaW5lci5mYWN0b3J5KCdNeURiJywgTXlEYik7XG52YXIgZGIgPSBkaUNvbnRhaW5lci5nZXQoJ015RGInKTtcbmFzc2VydChkYi5maW5kKTtcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRElDb250YWluZXIge1xuXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLm1vZHVsZXMgPSBuZXcgTWFwKCk7XG4gICAgfVxuXG4gICAgX3JlZ2lzdGVyKGtleSwgdmFsKSB7XG4gICAgICAgIGxvZygncmVnaXN0ZXIgPT4nLCBrZXkpO1xuICAgICAgICB0aGlzLm1vZHVsZXMuc2V0KGtleSwgdmFsKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZmFjdG9yeSgpIGlzIHVzZWQgdG8gYXNzb2NpYXRlIGEgY29tcG9uZW50IG5hbWUgYWdhaW5zdCBhIGZhY3RvcnkuXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gZmFjdG9yeVxuICAgICAqL1xuICAgIGZhY3RvcnkobmFtZSwgZmFjdG9yeSkge1xuICAgICAgICBmYWN0b3JpZXNbbmFtZV0gPSBmYWN0b3J5O1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVnaXN0ZXIobmFtZSwgZmFjdG9yeSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmVnaXN0ZXIoKSBpcyB1c2VkIHRvIGFzc29jaWF0ZSBhIGNvbXBvbmVudCBuYW1lIGRpcmVjdGx5IHdpdGggYW4gaW5zdGFuY2UuXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gZGVwXG4gICAgICovXG4gICAgcmVnaXN0ZXIobmFtZSwgZGVwKSB7XG4gICAgICAgIGRlcGVuZGVuY2llc1tuYW1lXSA9IGRlcDtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZ2lzdGVyKG5hbWUsIGRlcCk7XG4gICAgfVxuXG4gICAgcGx1Z2luKG5hbWUsIGZhY3RvcnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmFjdG9yeShuYW1lLCBmYWN0b3J5KTtcbiAgICB9XG5cbiAgICBjb250cm9sbGVyKG5hbWUsIGZhY3RvcnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmFjdG9yeShuYW1lLCBmYWN0b3J5KTtcbiAgICB9XG5cbiAgICBtb2RlbChuYW1lLCBmYWN0b3J5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZhY3RvcnkobmFtZSwgZmFjdG9yeSk7XG4gICAgfVxuXG4gICAgc2VydmljZShuYW1lLCBmYWN0b3J5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyKG5hbWUsIGZhY3RvcnkpO1xuICAgIH1cblxuICAgIHZhbHVlKGtleSwgdmFsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyKGtleSwgdmFsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBnZXQoKSByZXRyaWV2ZXMgYSBjb21wb25lbnQgYnkgaXRzIG5hbWUuXG4gICAgICogSWYgYW4gaW5zdGFuY2UgaXMgYWxyZWFkeSBhdmFpbGFibGUsIGl0IHNpbXBseSByZXR1cm5zIGl0OyBvdGhlcndpc2UsIGl0IHRyaWVzIHRvIGludm9rZSB0aGUgcmVnaXN0ZXJlZCBmYWN0b3J5IHRvIG9idGFpbiBhIG5ldyBpbnN0YW5jZS5cbiAgICAgKiBJdCBpcyB2ZXJ5IGltcG9ydGFudCB0byBvYnNlcnZlIHRoYXQgdGhlIG1vZHVsZSBmYWN0b3JpZXMgYXJlIGludm9rZWQgYnkgaW5qZWN0aW5nIHRoZSBjdXJyZW50IGluc3RhbmNlIG9mIHRoZSBzZXJ2aWNlIGxvY2F0b3IgKHNlcnZpY2VMb2NhdG9yKS5cbiAgICAgKiBUaGlzIGlzIHRoZSBjb3JlIG1lY2hhbmlzbSBvZiB0aGUgcGF0dGVybiB0aGF0IGFsbG93cyB0aGUgZGVwZW5kZW5jeSBncmFwaCBmb3Igb3VyIHN5c3RlbSB0byBiZSBidWlsdCBhdXRvbWF0aWNhbGx5IGFuZCBvbi1kZW1hbmQuIFdlIHdpbGwgc2VlIGhvdyB0aGlzIHdvcmtzIGluIGEgbW9tZW50LlxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgZ2V0KG5hbWUpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgZmFjdG9yeTtcblxuICAgICAgICBsb2coJ2dldCcsIG5hbWUpO1xuICAgICAgICBpZiAoIWRlcGVuZGVuY2llc1tuYW1lXSkge1xuICAgICAgICAgICAgZmFjdG9yeSA9IGZhY3Rvcmllc1tuYW1lXTtcbiAgICAgICAgICAgIGRlcGVuZGVuY2llc1tuYW1lXSA9IGZhY3RvcnkgJiYgc2VsZi5pbmplY3QoZmFjdG9yeSk7XG5cbiAgICAgICAgICAgIGlmICghZGVwZW5kZW5jaWVzW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgbG9nKCdnZXQuZXJyb3InLCBgQ2Fubm90IGZpbmQgZGVwZW5kZW5jeTogJHtuYW1lfWApO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGZpbmQgZGVwZW5kZW5jeTogJHtuYW1lfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZXBlbmRlbmNpZXNbbmFtZV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZWN0IGFyZ3VtZW50c1xuICAgICAqIEBwYXJhbSBmYWN0b3J5IC0gVGhlIGZhY3RvcnkgbW9kdWxlXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgaW5qZWN0KGZhY3RvcnkpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgYXJncyA9IGFyZ3NMaXN0KGZhY3RvcnkpLm1hcChmdW5jdGlvbiAoZGVwZW5kZW5jeSkge1xuICAgICAgICAgICAgbG9nKCdpbmplY3QgPT4nLCBkZXBlbmRlbmN5KTtcbiAgICAgICAgICAgIHJldHVybiBzZWxmLmdldChkZXBlbmRlbmN5KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGZhY3RvcnkpIHtcbiAgICAgICAgICAgIGxvZyhhcmdzLmxlbmd0aCwgJ2RlcGVuZGVuY2llcycpO1xuICAgICAgICAgICAgcmV0dXJuIGZhY3RvcnkuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2coJ2luamVjdC5lcnJvcicsIGBDYW5ub3QgaW5qZWN0IGRlcGVuZGVuY3k6ICR7ZmFjdG9yeX1gKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGluamVjdCBkZXBlbmRlbmN5OiAke2ZhY3Rvcnl9YCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIG1vZHVsZShuYW1lKSB7XG4gICAgICAgIGxvZygnRElDb250YWluZXIubW9kdWxlJywgbmFtZSk7XG4gICAgICAgIHJldHVybiBuZXcgRElDb250YWluZXIobmFtZSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
