'use strict';
let dependencies = {};
let factories = {};
let serviceLocator = {};

export default class ServiceLocator {
    dependencies:any;
    factories:any;

    static factory(name, factory) {
        factories[name] = factory;
    }

    static register(name, instance) {
        dependencies[name] = instance;
    }

    static get(name) {
        if (!dependencies[name]) {
            var factory = factories[name];
            dependencies[name] = factory && factory(serviceLocator);
            if (!dependencies[name]) {
                throw new Error('Cannot find module: ' + name);
            }
        }
        return dependencies[name];
    }
}
