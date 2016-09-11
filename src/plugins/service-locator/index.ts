'use strict';
let dependencies = {};
let factories = {};
let serviceLocator = {};
/**
 * This is the Passes Plugin
 * @module        ServiceLocator
 * @class        ServiceLocator
 *
 * @example
 * const ServiceLocator = require('').default;
 * let mockService = {
 *      name: 'test'
 * };
 * ServiceLocator.register('mockService', mockService);
 * ServiceLocator.get('mockService').name
 */
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
