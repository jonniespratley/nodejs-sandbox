'use strict';
var dependencies = {};
var factories = {};
var serviceLocator = {};
export default class ServiceLocator{

  static factory(name, factory) { //[1]
    factories[name] = factory;
  }
  static register(name, instance) { //[2]
    dependencies[name] = instance;
  }
  static get(name) { //[3]
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
