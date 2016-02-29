'use strict';

const path = require('path');
const assert = require('assert');
const express = require('express');
const request = require('supertest');
const plugin = require('./');

const Program = require(path.resolve(__dirname, '../../../../index')).Program;
var app = express();

app.use(plugin);


describe('blog-plugin', () => {

	it('should be defined', () => {
		assert(plugin);
	});

	describe('Controller', () => {
		it('method - should do ...', (done) => {
			//
			done();
		});
	});

	describe('Route', () => {
		it('GET - /path - should return 200', (done) => {
			request(app)
				.get('/')
				.expect(200, done);
		});
	});

	describe('Service', () => {
		it('method - should do ...', (done) => {
			//
			done();
		});
	});

});
