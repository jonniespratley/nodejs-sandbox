'use strict';
const argsList = require('args-list');
const debug = require('debug');
const path = require('path');
var getLogger = function (name) {
    return debug('nodejs:' + name);
};
const log = getLogger('DIContainer');
var dependencies = {};
var factories = {};
class DIContainer {
    constructor(name) {
        this.name = name;
        this.modules = new Map();
    }
    _register(key, val) {
        log('register =>', key);
        this.modules.set(key, val);
        return this;
    }
    factory(name, factory) {
        factories[name] = factory;
        return this._register(name, factory);
    }
    register(name, dep) {
        dependencies[name] = dep;
        return this._register(name, dep);
    }
    plugin(name, factory) {
        return this.factory(name, factory);
    }
    controller(name, factory) {
        return this.factory(name, factory);
    }
    model(name, factory) {
        return this.factory(name, factory);
    }
    service(name, factory) {
        return this.register(name, factory);
    }
    value(key, val) {
        return this.register(key, val);
    }
    get(name) {
        let self = this;
        let factory;
        log('get', name);
        if (!dependencies[name]) {
            factory = factories[name];
            dependencies[name] = factory && self.inject(factory);
            if (!dependencies[name]) {
                log('get.error', `Cannot find dependency: ${name}`);
                throw new Error(`Cannot find dependency: ${name}`);
            }
        }
        return dependencies[name];
    }
    inject(factory) {
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
            log('inject.error', `Cannot inject dependency: ${factory}`);
            throw new Error(`Cannot inject dependency: ${factory}`);
        }
    }
    static module(name) {
        log('DIContainer.module', name);
        return new DIContainer(name);
    }
}
exports.DIContainer = DIContainer;
//# sourceMappingURL=index.js.map