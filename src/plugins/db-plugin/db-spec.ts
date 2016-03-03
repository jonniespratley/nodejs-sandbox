'use strict';
const async = require('async');
const assert = require('assert');
const DB = require('./').default;
var db = null;

describe('db-plugin', function () {

    before(function (done) {
        db = new DB('data');
        var createUser = function (id, callback) {
            db.put('test-doc-' + id, {name: 'test doc ' + id}).then(function (resp) {
                callback(null, resp);
            });
        };
        async.times(5, function (n, next) {
            createUser(n, function (err, user) {
                next(err, user)
            });
        }, function (err, users) {
            console.log('created', users);
            done();
        });
    });
    after(function () {
        db.close();
    });

    it('should be defined', function () {
        assert(DB);
    });

    it('should create instance', function () {
        assert(db);
    });

    it('put() - should do put', function (done) {
        db.put('test-doc', {name: 'db-plugin'}).then(function (resp) {
            assert(resp);
            done();
        });
    });


    it('get() - should get key value', function (done) {
        db.get('test-doc').then(function (resp) {
            assert(resp);
            done();
        });
    });

    it('find(params) - should return array', function (done) {
        db.find({}).then(function (resp) {
            assert(resp);
            done();
        });
    });

    it('remove() - should remove key value', function (done) {
        db.remove('test-doc').then(function (resp) {
            assert(resp);
            done();
        }).catch(function (err) {
            assert.fail(err);
            done();
        });
    });


});
