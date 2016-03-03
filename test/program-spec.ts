"use strict";
const assert = require('assert');
const Program = require('./program').default;
const Plugin = require('./plugins/app-plugin');
let instance;

let mockPlugin = null;

describe('Program', function () {
    it('should be defined', function (done) {
        assert(Program);
        done();
    });

    it('should create instance', function (done) {
        instance = new Program();
        assert(instance);
        done();
    });

    it('run() - should invoke callback function when ran', function (done) {
        new Program({
            namespace: 'test-app',
            dbName: 'test-db',
            run: function(app){
                assert(app instanceof Program);
                assert(app.initialized === true, 'initialized is true');
                assert(app.namespace === 'test-app', 'has namespace');
                assert(app.dbName === 'test-db', 'has dbName');
                done();
            }
        });
    });

    it('run() - should invoke callback function when ran', function (done) {
        instance.run(function(app){
            assert(app instanceof Program);
            done();
        });
    });

    it('use(plugin) - should inject all dependencies and load plugin', function (done) {
        instance.use(Plugin);
        assert(instance.plugins.plugin === Plugin);
        done();
    });
});