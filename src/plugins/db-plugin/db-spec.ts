'use strict';
const async = require('async');
const assert = require('assert');
const DB = require('./').default;
var db = null;

describe('db-plugin', function () {
  this.timeout(20000);
    before(function (done) {
        db = new DB('data', {type: 'memory'});
        var createUser = function (id, callback) {
            db.put('test-doc-' + id, {name: 'test doc ' + id}).then(function (resp) {
                callback(null, resp);
            });
            
        };
        async.times(5, function (n, next) {
            createUser(n, function (err, user) {
                assert(user);
                next(err, user)

            });
        }, function (err, users) {
            //console.log('created', users);
            assert(users.length)
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
    it('should thro error if no name', function () {
        assert.throws(function(){
          new DB();
        });
    });

    it('put() - should put document', function (done) {
        db.put('test-doc', {name: 'db-plugin'}).then(function (resp) {
            assert(resp);
            done();
        });
    });


    it('get() - should get document key value', function (done) {
        db.get('test-doc').then(function (resp) {
            assert(resp);
            done();
        });
    });

    it('find(params) - should return array of documents', function (done) {
        db.find({}).then(function (resp) {
            assert(resp);
            assert(resp.length);
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
    it('remove() - should fail to remove unknown key', function (done) {
        db.remove('unknown-doc').then(function (resp) {
            assert.fail(resp);
            done();
        }).catch(function (err) {
            assert.ok(err);
            done();
        });
    });
    it('remove() - should thro error if no id', function () {
        assert.throws(function(){
          db.remove();
        });
    });


});
