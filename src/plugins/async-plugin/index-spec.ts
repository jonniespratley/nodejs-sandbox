'use strict';
const assert = require('assert');
const asyncModule = require('./');


describe('async-plugin', function () {
    this.timeout(25000);
    it('should be defined', function () {
        assert(asyncModule);
    });

    it('should create instance', function (done) {

        asyncModule.initialize(  function (data) {

            console.log('asyncModule.js initialized');
            done();
        });
    });
    xit('should invoke func', function (done) {
        asyncModule.tellMeSomething(function(err, resp){
            assert(resp);
            done();
        });
    });


});
