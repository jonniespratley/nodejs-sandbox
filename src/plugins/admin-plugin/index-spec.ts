'use strict';

const path = require('path');
const assert = require('assert');
const express = require('express');
const request = require('supertest');
const plugin = require('./').default;
const Program = require(path.resolve(__dirname, '../../program')).default;

var program = new Program('test');
program.use(plugin);

var app = program.get('app');


describe('AdminPlugin plugin', () => {

    it('should be defined', () => {
        assert(plugin);
    });

    describe('Controller', () => {
        it('method - should do ...', (done) => {
            //
            done();
        });
    });

    describe('Router', () => {
        it('GET - /admin - should return 200', (done) => {
            request(app)
                .get('/admin')
                .expect(200, done);
        });
    });

    describe('Service', () => {
        it('method - should do ...', (done) => {
            done();
        });
    });

});
