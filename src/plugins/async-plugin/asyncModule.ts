'use strict';

const debug = require('debug');
const log = require('npmlog');

//asyncModule.js
var asyncModule = {};
asyncModule.initialized = false;


asyncModule.initialize = function (callback) {
    log.info('initialize');
    setTimeout(function () {
        log.info('initialize', 'callback');
        asyncModule.initialized = true;
        callback(asyncModule);
    }, 1000);
};

asyncModule.tellMeSomething = function (callback) {
    log.info('tellMeSomething');
    process.nextTick(function () {
        if (!asyncModule.initialized) {
            return callback(
                new Error('I dont have anything to say right now')
            );
        }
        callback(null, 'Current time is: ' + new Date());
    });
};

module.exports = asyncModule;
