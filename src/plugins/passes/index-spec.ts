"use strict";
const assert = require('assert');
const async = require('async');
const path = require('path');
const fs = require('fs-extra');
const express = require('express');
const request = require('supertest');

const Plugin = require(path.resolve(__dirname, './index')).default;
const Router = require(path.resolve(__dirname, './router')).default;
const Model = require(path.resolve(__dirname, './model')).default;
const Service = require(path.resolve(__dirname, './service')).default;

let service = null;
let instance = null;
let app = express();
let mockObj = {
    id: 'test-1'
};

let passes = null;
let testId = '';
let testUser = new Model({
    id: 'test-user-00',
    name: 'user',
    type: 'user'
});

describe('Passes Plugin', function () {

    it('should be defined', function (done) {
        assert(Plugin);
        done();
    });

    it('should create new instance', function (done) {
        instance = new Plugin(app);
        assert(instance);
        done();
    });

    it('should mount to express app', function (done) {
        new Router(app);
        done();
    });

    describe('Controller', function () {

    });

    describe('Model', function () {
        it('should return model', function (done) {
            let u = new Model({id: 'test-id'});
            assert(u);
            assert(u.id, 'has passed property');
            done();
        });

        it('should return model with unique id', function (done) {
            let u = new Model({name: 'jonnie'});
            assert(u);
            assert(u.id, 'has id property');
            done();
        });
    });

    describe('Service', function () {

        before(function (done) {
            service = new Service();
            let m = null
            let createModel = function (id, callback) {
                m = new Model({
                    id: 'test-pass-' + id,
                    name: 'pass ' + id,
                    type: 'test'
                });
                service.save(m).then(function (resp) {
                    callback(null, resp);
                });
            };

            async.times(5, function (n, next) {
                createModel(n, function (err, resp) {
                    next(err, resp)
                });
            }, function (err, _passes) {
                console.log('================================= BEFORE =================');
                console.log('created', _passes);
                passes = _passes
                mockObj = _passes[1];
                done();
            });
        });

        it('should have an instance', function () {
            assert(service);
        });

        it('find() - should get all passes from data store', function (done) {
            service.find({
                type: 'test'
            }).then(function (resp) {
                assert(resp);
                assert(resp.length);
                done();
            }).catch(function (err) {
                assert.fail(err);
                done();
            });
        });

        it('save() - should save a pass to data store', function (done) {
            service.save(mockObj).then(function (resp) {
                console.log(resp);
                assert(resp);
                done();
            }).catch(function (err) {
                assert.fail(err);
                done();
            });
        });

        it('save() should update a pass in data store', function (done) {
            service.save({
                id: 'test-1',
                email: 'updated@gmail.com'
            }).then(function (resp) {
                console.log(resp);
                assert(resp);
                done();
            }).catch(function (err) {
                assert.fail(err);
                done();
            });
        });

        it('get() - should get a pass from data store', function (done) {
            service.get(mockObj.id).then(function (resp) {
                assert(resp);
                done();
            }).catch(function (err) {
                assert.fail(err);
                done();
            });
        });

        it('remove() - should remove a pass from data store', function (done) {
            service.remove(mockObj.id).then(function (resp) {
                assert(resp);
                done();
            }).catch(function (err) {
                assert.fail(err);
                done();
            });
        });

        it('save() - should reject', function () {
            service.save({}).then(function (resp) {
                assert.fail(resp);
                done();
            }).catch(function (err) {
                assert(err);
                done();
            });
        });

        it('get() - should reject', function () {
            service.get('unknown').then(function (resp) {
                assert.fail(resp);
                done();
            }).catch(function (err) {
                assert(err);
                done();
            });
        });

        it('remove() - should reject', function () {
            service.remove('unknown').then(function (resp) {
                assert.fail(resp);
                done();
            }).catch(function (err) {
                assert(err);
                done();
            });
        });

        it('remove() - throw error', function () {
            assert.throws(function () {
                service.remove(null);
            }, Error);
        });

    });

    describe('Router', function () {

        it('GET - /passes - should return 200', function (done) {
            request(app)
                .get('/passes')
                .set('Content-Type', 'application/json')
                .expect(200, done);
        });

        it('POST - /passes - should return 201', function (done) {
            request(app)
                .post('/passes')
                .set('Content-Type', 'application/json')
                .send(mockObj)
                .expect(201, done);
        });

        it('GET - /passes/:id - should return 200', function (done) {
            request(app)
                .get('/passes/' + mockObj.id)
                .set('Content-Type', 'application/json')
                .expect(200, done);
        });

        it('PUT - /passes/:id - should return 200', function (done) {

            request(app)
                .put('/passes/' + mockObj.id)
                .set('Content-Type', 'application/json')
                .send(mockObj)
                .expect(200, done);
        });

        it('DELETE - /passes/:id - should return 200', function (done) {
            request(app)
                .delete('/passes/' + mockObj.id)
                .set('Content-Type', 'application/json')
                .expect(200, done);
        });
    });


});
