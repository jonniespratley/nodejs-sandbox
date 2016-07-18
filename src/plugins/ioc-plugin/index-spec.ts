'use strict';
const assert = require('assert');
const express = require('express');
const request = require('supertest');
const plugin = require('./')();

var app = express();

describe('ioc-plugin', function () {

    it('should be defined', function () {
        assert(plugin);
        app[plugin.method](plugin.route, plugin.handler);
    });

    it('GET - /newRoute - should return 200', function (done) {
        request(app)
            .get('/newRoute')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

});
