"use strict";
var async = require('async');
var assert = require('assert');
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
var documents = null;
var app = express();
var mockObj = {
    id: '/api/users-1',
    doctype: 'users-plugin'
};
describe('UsersPlugin Plugin', function () {
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
        //
    });
    describe('Model', function () {
        it('should return model', function (done) {
            var u = new Model({ id: 'test-/api/users-id' });
            assert(u);
            assert(u.id, 'has passed property');
            done();
        });
        it('should return model with unique id', function (done) {
            var u = new Model({ name: '/api/users' });
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
                    id: 'test-users-plugin-' + id,
                    name: 'users-plugin ' + id,
                    doctype: 'users-plugin'
                });
                service.save(m).then(function (resp) {
                    callback(null, resp);
                });
            };
            async.times(5, function (n, next) {
                createModel(n, function (err, resp) {
                    next(err, resp);
                });
            }, function (err, _documents) {
                console.log('created', _documents);
                documents = _documents;
                mockObj = _documents[0];
                done();
            });
        });
        it('should have an instance', function () {
            assert(service);
        });
        it('save() - should save a users-plugin object to data store', function (done) {
            service.save(mockObj).then(function (resp) {
                console.log(resp);
                assert(resp);
                done();
            }).catch(function (err) {
                assert.fail(err);
                done();
            });
        });
        it('save() should update a users-plugin object in data store', function (done) {
            mockObj.newProperty = 'Updated';
            service.save(mockObj).then(function (resp) {
                console.log('SAVED ITEM', resp);
                assert(resp, 'returns response');
                done();
            }).catch(function (err) {
                assert.fail(err);
                done();
            });
        });
        it('get() - should get a users-plugin object from data store', function (done) {
            service.get(mockObj.id).then(function (resp) {
                assert(resp);
                assert(resp.id === mockObj.id, 'returns matching object');
                done();
            }).catch(function (err) {
                assert.fail(err);
                done();
            });
        });
        it('find() - should get all users-plugin documents from data store', function (done) {
            service.find({ doctype: 'users-plugin' }).then(function (resp) {
                assert(resp);
                assert(resp.length);
                done();
            }).catch(function (err) {
                assert.fail(err);
                done();
            });
        });
        it('remove() - should remove a users-plugin object from data store', function (done) {
            service.remove(mockObj.id).then(function (resp) {
                assert(resp);
                done();
            }).catch(function (err) {
                assert.fail(err);
                done();
            });
        });
        describe('Rejections/Errors', function () {
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
    });
    describe('UsersPlugin Router', function () {
        it('GET - /api/users - should return 200', function (done) {
            request(app)
                .get('/api/users')
                .set('Content-Type', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
        it('POST - /api/users - should return 201', function (done) {
            request(app)
                .post('/api/users')
                .set('Content-Type', 'application/json')
                .expect('Content-Type', /json/)
                .send(mockObj)
                .expect(201, done);
        });
        it('GET - /api/users/:id - should return 200', function (done) {
            request(app)
                .get('/api/users/' + mockObj.id)
                .set('Content-Type', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
        it('GET - /api/users/unknown - should return 404', function (done) {
            request(app)
                .get('/api/users/unknown')
                .set('Content-Type', 'application/json')
                .expect('Content-Type', /json/)
                .expect(404, done);
        });
        it('PUT - /api/users/:id - should return 200', function (done) {
            request(app)
                .put('/api/users/' + mockObj.id)
                .set('Content-Type', 'application/json')
                .expect('Content-Type', /json/)
                .send(mockObj)
                .expect(200, done);
        });
        it('PUT - /api/users/unknown - should return 404', function (done) {
            request(app)
                .put('/api/users/unknown')
                .set('Content-Type', 'application/json')
                .expect('Content-Type', /json/)
                .send(mockObj)
                .expect(404, done);
        });
        it('DELETE - /api/users/:id - should return 200', function (done) {
            request(app)
                .delete('/api/users/' + mockObj.id)
                .set('Content-Type', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
        it('DELETE - /api/users/:id - should return 404', function (done) {
            request(app)
                .delete('/api/users/unknown')
                .set('Content-Type', 'application/json')
                .expect('Content-Type', /json/)
                .expect(404, done);
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL3VzZXJzLXBsdWdpbi9pbmRleC1zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMvQixJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLElBQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUMvQixJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbkMsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXJDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUNuRSxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDcEUsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ2xFLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUV0RSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDbkIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQztBQUNyQixJQUFJLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztBQUVwQixJQUFJLE9BQU8sR0FBRztJQUNWLEVB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NkNBQTZDLEVBQUUsVUFBUyxJQUFJO1lBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUM7aUJBQ1AsTUFBTSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDO2lCQUNsQyxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDO2lCQUN2QyxNQUFNLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQztpQkFDOUIsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyw2Q0FBNkMsRUFBRSxVQUFTLElBQUk7WUFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQztpQkFDUCxNQUFNLENBQUMsb0JBQW9CLENBQUM7aUJBQzVCLEdBQUcsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUM7aUJBQ3ZDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDO2lCQUM5QixNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJwbHVnaW5zL3VzZXJzLXBsdWdpbi9pbmRleC1zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
