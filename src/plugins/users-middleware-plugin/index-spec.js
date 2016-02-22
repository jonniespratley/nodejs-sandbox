'use strict';
const assert = require('assert');
const path = require('path');
const fs = require('fs-extra');
const express = require('express');
const request = require('supertest');
const UsersPlugin = require(path.resolve(__dirname, './index.js')).Users;
const Router = require(path.resolve(__dirname, './users-router.js'));
const UserModel = require(path.resolve(__dirname, './users-service.js')).UserModel;
const UsersService = require(path.resolve(__dirname, './users-service.js')).UsersService;
var service = null;
var instance = null;
var app = express();
describe('UsersPlugin', function () {
    it('should be defined', function (done) {
        assert(UsersPlugin);
        done();
    });
    it('should create new instance', function (done) {
        instance = new UsersPlugin();
        done();
    });
    it('should mount to express app', function (done) {
        app.use('/', Router.default());
        done();
    });
    describe('Users Router', function () {
        it('GET - /users - should return 200', function (done) {
            request(app)
                .get('/users')
                .expect(200, done);
        });
        it('GET - /users/:id - should return 200', function (done) {
            request(app)
                .get('/users/1')
                .expect(200, done);
        });
        it('POST - /users - should return 200', function (done) {
            request(app)
                .post('/users')
                .send({
                name: 'test-user'
            })
                .expect(200, done);
        });
        it('POST - /users - should return 200', function (done) {
            request(app)
                .post('/users')
                .send({
                name: 'test-user'
            })
                .expect(200, done);
        });
        it('PUT - /users/:id - should return 200', function (done) {
            request(app)
                .put('/users/1')
                .send({
                id: 1,
                name: 'updated-user'
            })
                .expect(200, done);
        });
        it('DELETE - /users/:id - should return 200', function (done) {
            request(app)
                .delete('/users/3')
                .expect(200, done);
        });
    });
    describe('Users Controller', function () {
        //
    });
    describe('Users Model', function () {
        it('should return model', function (done) {
            var u = new UserModel({ id: 'test' });
            assert(u);
            assert(u.id, 'has passed property');
            done();
        });
    });
    describe('UsersService', function () {
        var testId = '';
        var testUser = new UserModel({
            id: 'user-test',
            username: 'test',
            email: 'test@gmail.com'
        });
        before(function (done) {
            service = new UsersService();
            service.save(new UserModel({ name: 'test' })).then(function (resp) {
                testId = resp;
                console.log(resp);
                done();
            });
        });
        it('should have an instance', function () {
            assert(service);
        });
        it('find() - should get all users from data store', function (done) {
            service.find(testUser.id).then(function (resp) {
                console.log(resp);
                assert(resp);
                done();
            }).catch(function (err) {
                assert.fail(err);
                done();
            });
        });
        it('save() - should save a user to data store', function (done) {
            service.save(testUser).then(function (resp) {
                console.log(resp);
                assert(resp);
                done();
            }).catch(function (err) {
                assert.fail(err);
                done();
            });
        });
        it('save() should update a user in data store', function (done) {
            service.save({
                id: 'user-test',
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
        it('save() - should reject', function () {
            service.save({}).then(function (resp) {
                assert.fail(resp);
                done();
            }).catch(function (err) {
                assert(err);
                done();
            });
        });
        it('get() - should get a user from data store', function (done) {
            assert(testId);
            service.get(testId).then(function (resp) {
                assert(resp);
                done();
            }).catch(function (err) {
                assert.fail(err);
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
        it('remove() - should remove a user from data store', function (done) {
            assert(testId);
            service.remove(testId).then(function (resp) {
                assert(resp);
                done();
            }).catch(function (err) {
                assert.fail(err);
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
