'use strict';
'use strict';
const path = require('path');
const assert = require('assert');
const express = require('express');
const request = require('supertest');
const plugin = require('./');

const Program = require(path.resolve(__dirname, '../../program'));

var program = new Program('test');
program.use(plugin);

var app = program.get('app');

describe('blog-plugin', function() {

  it('should be defined', function() {
    assert(plugin);
  });

  it('GET - /blog/posts - should return 200', function(done) {
    request(app)
      .get('/blog/posts')
      .set('Accept', 'text/html')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });

  it('GET - /blog - should return 200', function(done) {
    request(app)
      .get('/blog')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('GET - /blog/admin - should return 200', function(done) {
    request(app)
      .get('/blog/admin')
        .set('Accept', 'application/json')
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
