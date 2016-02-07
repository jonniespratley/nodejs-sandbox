'use strict';
module.exports = function() {
  var dependencies = {};
  var factories = {};
  var serviceLocator = {};

  serviceLocator.factory = function(name, factory) { //[1]
    factories[name] = factory;
  };

  serviceLocator.register = function(name, instance) { //[2]
    dependencies[name] = instance;
  };
  serviceLocator.get = function(name) { //[3]
    if (!dependencies[name]) {
      var factory = factories[name];
      dependencies[name] = factory && factory(serviceLocator);
      if (!dependencies[name]) {
        throw new Error('Cannot find module: ' + name);
      }
    }
    return dependencies[name];
  };

  return serviceLocator;
};
