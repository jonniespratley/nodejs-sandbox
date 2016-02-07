'use strict';
const assert = require('assert');
const express = require('express');
const request = require('supertest');
const plugin = require('./');

var app = express();
plugin(app);

describe('app-plugin', function() {

  it('should be defined', function() {
    assert(plugin);
  });

  it('GET - /newRoute - should return 200', function(done) {
    request(app)
      .get('/newRoute')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('POST - /newRoute - should return 201', function(done) {
    request(app)
      .post('/newRoute')
      .send({
        name: 'Jonnie'
      })
      .expect('Content-Type', /json/)
      .expect(201, done);
  });

  it('PUT - /newRoute/:id - should return 200', function(done) {
    request(app)
      .put('/newRoute/1')
      .send({
        name: 'Jonnie Dollas'
      })
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('DELETE - /newRoute/:id - should return 200', function(done) {
    request(app)
      .delete('/newRoute/1')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });



});
