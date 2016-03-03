"use strict";
const assert = require('assert');
const express = require('express');
const request = require('supertest');
const App = require('./app').default;
const Plugin = require('./plugins/app-plugin');
let instance;
let app = express();

describe('App', function () {
    it('should be defined', function (done) {
        assert(App);
        done();
    });

    it('should create instance', function (done) {
        instance = new App({
            app: app
        });
        assert(instance);
        done();
    });

    describe('App Routes', function () {
        it('should load plugin', function (done) {
            Plugin(instance);
            done();
        });
        it('GET - /newRoute - should return 200', function (done) {
            request(instance)
                .get('/newRoute')
                .set('Content-Type', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });
});