'use strict';
const assert = require('assert');
const path = require('path');
const fs = require('fs-extra');
const express = require('express');
const request = require('supertest');
const UsersPlugin = require(path.resolve(__dirname, './index.js')).Users;
const Router = require(path.resolve(__dirname, './users-router.js'));
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
        xit('GET - /users/:id - should return 200', function (done) {
            request(app)
                .get('/users/1')
                .expect(200, done);
        });
        it('POST - /users - should return 200', function (done) {
            request(app)
                .post('/users')
                .send({
                id: 3,
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
        xit('DELETE - /users/:id - should return 200', function (done) {
            request(app)
                .delete('/users/1')
                .expect(200, done);
        });
    });
    describe('Users Controller', function () {
        //
    });
    describe('Users Model', function () {
        //
    });
    describe('UsersService', function () {
        before(function () {
            service = new UsersService();
        });
        it('should have method1', function (done) {
            assert(service.method1);
            done();
        });
        it('should have an instance', function () {
            assert(service);
        });
    });
});
