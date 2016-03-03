'use strict';
const path = require('path');
const assert = require('assert');
const express = require('express');
const request = require('supertest');
const plugin = require('./');
const Program = require(path.resolve(__dirname, '../../program'));
var program = new Program('test');


program.inject(plugin);

var app = program.get('app');


describe('auth-plugin', function () {

    it('should be defined', function () {
        assert(plugin);
    });

    it('GET - /login - should return 200', function (done) {
        request(app)
            .get('/login')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('POST - /register - should return 201', function (done) {
        request(app)
            .post('/register')
            .send({
                username: 'test',
                password: 'test'
            })
            .expect('Content-Type', /json/)
            .expect(201, done);
    });

    it('POST - /login - should return 200', function (done) {
        request(app)
            .post('/login')
            .send({
                username: 'test',
                password: 'test'
            })
            .expect('Content-Type', /json/)
            .expect(200, done);
    });


    it('GET - /logout - should return 200', function (done) {
        request(app)
            .get('/logout')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });


});
