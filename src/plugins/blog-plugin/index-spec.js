'use strict';
const assert = require('assert');
const express = require('express');
const request = require('supertest');
const plugin = require('./');
const program = require('../../app');


var app = program.get('app');
plugin(program);

describe('blog-plugin', function() {

  it('should be defined', function() {
    assert(plugin);
  });

  it('GET - / - should return 200', function(done) {
    request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('POST - / - should return 201', function(done) {
    request(app)
      .post('/')
      .send({
        id: 'home-page',
        title: 'Home'
      })
      .expect('Content-Type', /json/)
      .expect(201, done);
  });

  it('PUT - /:id - should return 200', function(done) {
    request(app)
      .put('/home-page')
      .send({
        id: 'home-page',
        title: 'Home',
        type: 'post'
      })
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('DELETE - /:id - should return 200', function(done) {
    request(app)
      .delete('/home-page')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });



});
