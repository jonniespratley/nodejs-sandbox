'use strict';
var argsList = require('args-list');

module.exports = function() {
  var dependencies = {};
  var factories = {};
  var diContainer = {};
  diContainer.modules = new Map();

  diContainer._register = function(key, val){
    console.log('register', key);
    this.modules.set(key, val);
    return this;
  };


  diContainer.plugin = function(name, factory) {
    console.log('plugin', name);
   return this.factory(name, factory);
  };
  diContainer.factory = function(name, factory) {
    console.log('factory', name);
    factories[name] = factory;
    return this._register(name, factory);
  };

  diContainer.register = function(name, dep) {
    console.log('register', name);
    dependencies[name] = dep;
    return this._register(name, dep);
  };

  diContainer.get = function(name) {
    console.log('get', name);
    if (!dependencies[name]) {
      var factory = factories[name];
      dependencies[name] = factory &&
        diContainer.inject(factory);
      if (!dependencies[name]) {
        throw new Error('Cannot find module: ' + name);
      }
    }
    return dependencies[name];
  };

  diContainer.inject = function(factory) {
    var args = argsList(factory)
      .map(function(dependency) {
        return diContainer.get(dependency);
      });
    return factory.apply(null, args);
  };
  return diContainer;
};
