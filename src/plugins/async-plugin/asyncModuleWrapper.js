//asyncModuleWrapper.js

const asyncModule = require('./asyncModule');

var asyncModuleWrapper = {};

var activeState, pending = [], initializedState, notInitializedState;


initializedState = asyncModule;
notInitializedState = {
    initialize: function (callback) {
        asyncModule.initialize(function () {
            asyncModuleWrapper.initalized = true;
            activeState = initializedState;

            pending.forEach(function (req) {
                asyncModule[req.method].apply(null, req.args);
            });
            pending = [];

            callback();
        });
    },

    tellMeSomething: function (callback) {
        return pending.push({
            method: 'tellMeSomething',
            args: arguments
        });
    }
};
activeState = notInitializedState;

asyncModuleWrapper.initialized = false;
asyncModuleWrapper.initialize = function () {
    activeState.initialize.apply(activeState, arguments);
};


module.exports = asyncModuleWrapper;

