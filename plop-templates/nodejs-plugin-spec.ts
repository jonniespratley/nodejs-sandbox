"use strict";
const async = require('async');
const assert = require('assert');
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
let documents = null;
let app = express();

let mockObj = {
    id: '{{route}}-1'
};


describe('{{pascalCase name}} Plugin', function () {

    it('should be defined', function (done) {
        assert(Plugin);
        done();
    });

    it('should create new instance', function (done) {
        instance = new Plugin(app);
        assert(instance);
        done();
    });

    xit('should have model, controller, service instances', function (done) {
        assert(instance.Controller);
        assert(instance.Model);
        assert(instance.Service);
        done();
    });

    it('should mount to express app', function (done) {
        new Router(app);
        done();
    });


    describe('Controller', function () {
        //
    });

    describe('Model', function () {
        it('should return model', function (done) {
            let u = new Model({id: 'test-{{route}}-id'});
            assert(u);
            assert(u.id, 'has passed property');
            done();
        });

        it('should return model with unique id', function (done) {
            let u = new Model({name: '{{route}}'});
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
                   id: 'test-{{route}}-'+ id,
                   name: '{{route}} ' + id,
                   type: '{{route}}'
               });
                service.save(m).then(function (resp) {
                    callback(null, resp);
                });
            };
            async.times(5, function (n, next) {
                createModel(n, function (err, resp) {
                    next(err, resp)
                });
            }, function (err, _documents) {
                console.log('created', _documents);
                documents = _documents;
                mockObj = _documents[1];
                done();
            });
        });

        it('should have an instance', function () {
            assert(service);
        });

        it('find() - should get all documents from data store', function (done) {
            service.find({type: 'test'}).then(function (resp) {
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
                type: '{{route}}'
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

        describe('Rejections/Errors', function () {
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



    });


        describe('{{pascalCase name}} Router', function () {


            it('GET - /{{route}} - should return 200', function (done) {
                request(app)
                    .get('/{{route}}')
                    .expect(200, done);
            });

            it('POST - /{{route}} - should return 201', function (done) {
                request(app)
                    .post('/{{route}}')
                    .send(mockObj)
                    .expect(201, done);
            });

            it('GET - /{{route}}/:id - should return 200', function (done) {
                request(app)
                    .get('/{{route}}/' + mockObj.id)
                    .expect(200, done);
            });

            it('PUT - /{{route}}/:id - should return 200', function (done) {
                request(app)
                    .put('/{{route}}/' + mockObj.id)
                    .send(mockObj)
                    .expect(200, done);
            });

            it('DELETE - /{{route}}/:id - should return 200', function (done) {
                request(app)
                    .delete('/{{route}}/' + mockObj.id)
                    .expect(200, done);
            });
        });

});
