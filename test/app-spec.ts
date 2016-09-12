"use strict";
const assert = require('assert');
const express = require('express');
const request = require('supertest');
const App = require('./app').default;
const Plugin = require('./plugins/app-plugin');


describe('App', function () {
    let instance;
    let app = express();
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
       it('should load plugin', function (done) {
            var AppPlugin = require('./plugins/app-plugin');
            AppPlugin(instance);
            done();
        });       
     it('GET - /newRoute - should return 200', function (done) {
        request(instance)
            .get('/newRoute')
            .set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    describe('Plugins', function () {
        
      
        
        it('should load plugin', function () {
            function TagsPlugin(app, namespace) {
              console.log('app-plugin', 'namespace', namespace);
              return app.route('/tags/:id?')
                .all(function(req, res, next) {
                  console.log('tags plugin middleware', req.method, req.url);
                  next();
                })
                .get(function(req, res, next) {
                  res.status(200).json({
                    message: 'Welcome'
                  });
                })
                .put(function(req, res, next) {
                  res.status(200).json({
                    message: 'Updated'
                  });
                })
                .post(function(req, res, next) {
                  res.status(201).json({
                    message: 'Saved'
                  });
                })
                .delete(function(req, res, next) {
                  res.status(200).json({
                    message: 'Removed'
                  });
                });
            };
            var p = TagsPlugin(instance);
            assert(p);
        });
        
        it('should mounted routes', function(done){
            request(instance)
                .get('/tags/1')
                .set('Content-Type', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
        it('should mounted put route', function(done){
            request(instance)
                .put('/tags/1')
                .send({name: 'test'})
                .set('Content-Type', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
        
         it('should mounted post route', function(done){
            request(instance)
                .post('/tags')
                .send({name: 'test'})
                .set('Content-Type', 'application/json')
                .expect('Content-Type', /json/)
                .expect(201, done);
        });
    });
});