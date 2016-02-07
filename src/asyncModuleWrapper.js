//asyncModuleWrapper.js
var asyncModule = require('./asyncModule');
var asyncModuleWrapper = module.exports;

asyncModuleWrapper.initialized = false;
asyncModuleWrapper.initialize = function() {
  activeState.initialize.apply(activeState, arguments);
};

asyncModuleWrapper.tellMeSomething = function() {
  activeState.tellMeSomething.apply(activeState, arguments);
};
