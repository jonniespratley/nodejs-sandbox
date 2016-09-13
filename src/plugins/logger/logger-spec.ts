'use strict';
const assert = require('assert');
const Log = require('./').default;
const Logger = new Log('test');
var log = null;

describe('Logger Plugin', ()=>{

    it('should be defined', ()=>{
        assert(Logger);
    });
    

    it('getLogger(category) - should return logging instance.', ()=>{
        log = Logger.getLogger('spec');
        assert(log);
    });
    xit('info - should log info to console', ()=>{
      assert(log.info('info log'));
    });
    xit('error - should log error to console', ()=>{
      assert(log.error('error log'));
    });

});
