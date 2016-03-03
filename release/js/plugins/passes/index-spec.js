"use strict";
var assert = require('assert');
var async = require('async');
var path = require('path');
var fs = require('fs-extra');
var express = require('express');
var request = require('supertest');
var Plugin = require(path.resolve(__dirname, './index')).default;
var Router = require(path.resolve(__dirname, './router')).default;
var Model = require(path.resolve(__dirname, './model')).default;
var Service = require(path.resolve(__dirname, './service')).default;
var service = null;
var instance = null;
var app = express();
var mockObj = {
    id: 'test-1'
};
var passes = null;
var testId = '';
var testUser = new Model({
    id: 'test-user-00',
    name: 'user',
    type: 'user'
});
describe('Passes Plugin', function () {
    it('should be defined', function (done) {
        assert(Plugin);
        done();
    });
    it('should create new instance', function (done) {
        instance = new Plugin(app);
        assert(instance);
        done();
    });
    it('should mount to express app', function (done) {
        new Router(app);
        done();
    });
    describe('Controller', function () {
    });
    describe('Model', function () {
        it('should return model', function (done) {
            var u = new Model({ id: 'test-id' });
            assert(u);
            assert(u.id, 'has passed property');
            done();
        });
        it('should return model with unique id', function (done) {
            var u = new Model({ name: 'jonnie' });
            assert(u);
            assert(u.id, 'has id property');
            done();
        });
    });
    describe('Service', function () {
        before(function (done) {
            service = new Service();
            var m = null;
            var createModel = function (id, callback) {
                m = new Model({
                    id: 'test-pass-' + id,
                    name: 'pass ' + id,
                    type: 'test'
                });
                service.save(m).then(function (resp) {
                    callback(null, resp);
                });
            };
            async.times(5, function (n, next) {
                createModel(n, function (err, resp) {
                    next(err, resp);
                });
            }, function (err, _passes) {
                console.log('================================= BEFORE =================');
                console.log('created', _passes);
                passes = _passes;
                mockObj = _passes[1];
                done();
            });
        });
        it('should have an instance', function () {
            assert(service);
        });
        it('find() - should get all passes from data store', function (done) {
            service.find({
                type: 'test'
            }).then(function (resp) {
                assert(resp);
                assert(resp.length);
                done();
            }).catch(function (err) {
                assert.fail(err);
                done();
            });
        });
        it('save() - should save a pass to data store', function (done) {
            service.save(mockObj).then(function (resp) {
                console.log(resp);
                assert(resp);
                done();
            }).catch(function (err) {
                assert.fail(err);
                done();
            });
        });
        it('save() should update a pass in data store', function (done) {
            service.save({
                id: 'test-1',
                email: 'updated@gmail.com'
            }).then(function (resp) {
                console.log(resp);
                assert(resp);
                done();
            }).catch(function (err) {
                assert.fail(err);
                done();
            });
        });
        it('get() - should get a pass from data store', function (done) {
            service.get(mockObj.id).then(function (resp) {
                assert(resp);
                done();
            }).catch(function (err) {
                assert.fail(err);
                done();
            });
        });
        it('remove() - should remove a pass from data store', function (done) {
            service.remove(mockObj.id).then(function (resp) {
                assert(resp);
                done();
            }).catch(function (err) {
                assert.fail(err);
                done();
            });
        });
        it('save() - should reject', function () {
            service.save({}).then(function (resp) {
                assert.fail(resp);
                done();
            }).catch(function (err) {
                assert(err);
                done();
            });
        });
        it('get() - should reject', function () {
            service.get('unknown').then(function (resp) {
                assert.fail(resp);
                done();
            }).catch(function (err) {
                assert(err);
                done();
            });
        });
        it('remove() - should reject', function () {
            service.remove('unknown').then(function (resp) {
                assert.fail(resp);
                done();
            }).catch(function (err) {
                assert(err);
                done();
            });
        });
        it('remove() - throw error', function () {
            assert.throws(function () {
                service.remove(null);
            }, Error);
        });
    });
    describe('Router', function () {
        it('GET - /passes - should return 200', function (done) {
            request(app)
                .get('/passes')
                .set('Content-Type', 'application/json')
                .expect(200, done);
        });
        it('POST - /passes - should return 201', function (done) {
            request(app)
                .post('/passes')
                .set('Content-Type', 'application/json')
                .send(mockObj)
                .expect(201, done);
        });
        it('GET - /passes/:id - should return 200', function (done) {
            request(app)
                .get('/passes/' + mockObj.id)
                .set('Content-Type', 'application/json')
                .expect(200, done);
        });
        it('PUT - /passes/:id - should return 200', function (done) {
            request(app)
                .put('/passes/' + mockObj.id)
                .set('Content-Type', 'application/json')
                .send(mockObj)
                .expect(200, done);
        });
        it('DELETE - /passes/:id - should return 200', function (done) {
            request(app)
                .delete('/passes/' + mockObj.id)
                .set('Content-Type', 'application/json')
                .expect(200, done);
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL3Bhc3Nlcy9pbmRleC1zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQyxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0IsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLElBQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUMvQixJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbkMsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXJDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUNuRSxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDcEUsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ2xFLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUV0RSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDbkIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLElBQUksR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBQ3BCLElBQUksT0FBTyxHQUFHO0lBQ1YsRUFBRSxFQUFFLFFBQVE7Q0FDZixDQUFDO0FBRUYsSUFBSSxNQUFN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Q0FBQztRQUVILEVBQUUsQ0FBQyx1Q0FBdUMsRUFBRSxVQUFVLElBQUk7WUFFdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQztpQkFDUCxHQUFHLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUM7aUJBQzVCLEdBQUcsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUM7aUJBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUM7aUJBQ2IsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQywwQ0FBMEMsRUFBRSxVQUFVLElBQUk7WUFDekQsT0FBTyxDQUFDLEdBQUcsQ0FBQztpQkFDUCxNQUFNLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUM7aUJBQy9CLEdBQUcsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUM7aUJBQ3ZDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUdQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InBsdWdpbnMvcGFzc2VzL2luZGV4LXNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
