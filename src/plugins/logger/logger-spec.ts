'use strict';
const assert = require('assert');
const Log = require('./').default;
const Logger = new Log('test');
var log = null;

describe('Logger Plugin', function () {

    it('should be defined', function () {
        assert(Logger);
    });

    it('getLogger(category) - should return logging instance.', function () {
        log = Logger.getLogger('spec');
        log('this is from a spec');
        assert(log);
    });

});
