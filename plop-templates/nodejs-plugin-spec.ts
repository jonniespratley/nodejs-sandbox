"use strict";
const async = require('async');
const assert = require('assert');
const path = require('path');
const fs = require('fs-extra');
const express = require('express');
const request = require('supertest');

const Plugin = require(path.resolve(__dirname, './index')).default;
const Router = require(path.resolve(__dirname, './router')).default;
const Model = require(path.resolve(__dirname, './model')).default;
const Service = require(path.resolve(__dirname, './service')).default;

let service = null;
let instance = null;
let documents = null;
let app = express();

let mockObj = {
  id: '{{route}}-1',
  doctype: '{{dashCase name}}'
};

describe('{{pascalCase name}} Plugin', function() {

  it('should be defined', function(done) {
    assert(Plugin);
    done();
  });

  it('should create new instance', function(done) {
    instance = new Plugin(app);
    assert(instance);
    done();
  });

  it('should mount to express app', function(done) {
    new Router(app);
    done();
  });

  describe('Controller', function() {
    //
  });

  describe('Model', function() {
    it('should return model', function(done) {
      let u = new Model({ id: 'test-{{route}}-id' });
      assert(u);
      assert(u.id, 'has passed property');
      done();
    });

    it('should return model with unique id', function(done) {
      let u = new Model({ name: '{{route}}' });
      assert(u);
      assert(u.id, 'has id property');
      done();
    });
  });

  describe('Service', function() {
    before(function(done) {
      service = new Service();
      let m = null
      let createModel = function(id, callback) {
        m = new Model({
          id: 'test-{{dashCase name}}-' + id,
          name: '{{dashCase name}} ' + id,
          doctype: '{{dashCase name}}'
        });
        service.save(m).then(function(resp) {
          callback(null, resp);
        });
      };
      async.times(5, function(n, next) {
        createModel(n, function(err, resp) {
          next(err, resp)
        });
      }, function(err, _documents) {
          console.log('created', _documents);
          documents = _documents;
          mockObj = _documents[0];
          done();
        });
    });

    it('should have an instance', function() {
      assert(service);
    });

    it('find() - should get all {{dashCase name}} documents from data store', function(done) {
      service.find({ doctype: '{{dashCase name}}' }).then(function(resp) {
        assert(resp);
        assert(resp.length);
        done();
      }).catch(function(err) {
        assert.fail(err);
        done();
      });
    });

    it('save() - should save a {{dashCase name}} object to data store', function(done) {
      service.save(mockObj).then(function(resp) {
        console.log(resp);
        assert(resp);
        done();
      }).catch(function(err) {
        assert.fail(err);
        done();
      });
    });

    it('save() should update a {{dashCase name}} object in data store', function(done) {
      mockObj.newProperty = 'Updated';
      service.save(mockObj).then(function(resp) {
        console.log('SAVED ITEM', resp);
        assert(resp, 'returns response');
        done();
      }).catch(function(err) {
        assert.fail(err);
        done();
      });
    });

    it('get() - should get a {{dashCase name}} object from data store', function(done) {
      service.get(mockObj.id).then(function(resp) {
        assert(resp);
        assert(resp.id === mockObj.id, 'returns matching object');
        done();
      }).catch(function(err) {
        assert.fail(err);
        done();
      });
    });

    it('remove() - should remove a {{dashCase name}} object from data store', function(done) {
      service.remove(mockObj.id).then(function(resp) {
        assert(resp);
        done();
      }).catch(function(err) {
        assert.fail(err);
        done();
      });
    });

    describe('Rejections/Errors', function() {
      it('save() - should reject', function() {
        service.save({}).then(function(resp) {
          assert.fail(resp);
          done();
        }).catch(function(err) {
          assert(err);
          done();
        });
      });

      it('get() - should reject', function() {
        service.get('unknown').then(function(resp) {
          assert.fail(resp);
          done();
        }).catch(function(err) {
          assert(err);
          done();
        });
      });
      it('remove() - should reject', function() {
        service.remove('unknown').then(function(resp) {
          assert.fail(resp);
          done();
        }).catch(function(err) {
          assert(err);
          done();
        });
      });

      it('remove() - throw error', function() {
        assert.throws(function() {
          service.remove(null);
        }, Error);
      });
    });
  });
  describe('{{pascalCase name}} Router', function() {

    it('GET - /{{route}} - should return 200', function(done) {
      request(app)
        .get('/{{route}}')
        .set('Content-Type', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    it('POST - /{{route}} - should return 201', function(done) {
      request(app)
        .post('/{{route}}')
        .set('Content-Type', 'application/json')
        .expect('Content-Type', /json/)
        .send(mockObj)
        .expect(201, done);
    });

    it('GET - /{{route}}/:id - should return 200', function(done) {
      request(app)
        .get('/{{route}}/' + mockObj.id)
        .set('Content-Type', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    it('GET - /{{route}}/unknown - should return 404', function(done) {
      request(app)
        .get('/{{route}}/unknown')
        .set('Content-Type', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404, done);
    });

    it('PUT - /{{route}}/:id - should return 200', function(done) {
      request(app)
        .put('/{{route}}/' + mockObj.id)
        .set('Content-Type', 'application/json')
        .expect('Content-Type', /json/)
        .send(mockObj)
        .expect(200, done);
    });

    it('PUT - /{{route}}/unknown - should return 404', function(done) {
      request(app)
        .put('/{{route}}/unknown')
        .set('Content-Type', 'application/json')
        .expect('Content-Type', /json/)
        .send(mockObj)
        .expect(404, done);
    });

    it('DELETE - /{{route}}/:id - should return 200', function(done) {
      request(app)
        .delete('/{{route}}/' + mockObj.id)
        .set('Content-Type', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    it('DELETE - /{{route}}/:id - should return 404', function(done) {
      request(app)
        .delete('/{{route}}/unknown')
        .set('Content-Type', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404, done);
    });
  });

});
