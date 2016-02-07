'use strict';
'use strict';
const path = require('path');
const assert = require('assert');
const express = require('express');
const request = require('supertest');
const plugin = require('./');
const program = require(path.resolve(__dirname, '../../program'));


program.inject(plugin);

var app = program.get('app');

describe('blog-plugin', function() {

  it('should be defined', function() {
    assert(plugin);
  });

  xit('GET - /blog - should return 200', function(done) {
    request(app)
      .get('/blog')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  xit('GET - /blog/admin - should return 200', function(done) {
    request(app)
      .get('/blog/admin')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('POST - /blog/admin - should return 201', function(done) {
    request(app)
      .post('/blog/admin')
      .send({
        id: 'about-page',
        title: 'Home'
      })
      .expect('Content-Type', /json/)
      .expect(201, done);
  });

  it('PUT - /blog/:id - should return 200', function(done) {
    request(app)
      .put('/blog/admin/home-page')
      .send({
        id: 'home-page',
        title: 'Home',
        type: 'post'
      })
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('DELETE - /blog/:id - should return 200', function(done) {
    request(app)
      .delete('/blog/admin/home-page')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });



});
