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
    id: 'posts-1',
    doctype: 'posts'
};
describe('Posts Plugin', function () {
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
            var u = new Model({ id: 'test-posts-id' });
            assert(u);
            assert(u.id, 'has passed property');
            done();
        });
        it('should return model with unique id', function (done) {
            var u = new Model({ name: 'posts' });
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
                    id: 'test-posts-' + id,
                    name: 'posts ' + id,
                    doctype: 'posts'
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
        it('find() - should get all posts documents from data store', function (done) {
            service.find({ doctype: 'posts' }).then(function (resp) {
                assert(resp);
                assert(resp.length);
                done();
            }).catch(function (err) {
                assert.fail(err);
                done();
            });
        });
        it('save() - should save a posts object to data store', function (done) {
            service.save(mockObj).then(function (resp) {
                console.log(resp);
                assert(resp);
                done();
            }).catch(function (err) {
                assert.fail(err);
                done();
            });
        });
        it('save() should update a posts object in data store', function (done) {
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
        it('get() - should get a posts object from data store', function (done) {
            service.get(mockObj.id).then(function (resp) {
                assert(resp);
                assert(resp.id === mockObj.id, 'returns matching object');
                done();
            }).catch(function (err) {
                assert.fail(err);
                done();
            });
        });
        it('remove() - should remove a posts object from data store', function (done) {
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
    describe('Posts Router', function () {
        it('GET - /posts - should return 200', function (done) {
            request(app)
                .get('/posts')
                .expect(200, done);
        });
        it('POST - /posts - should return 201', function (done) {
            request(app)
                .post('/posts')
                .send(mockObj)
                .expect(201, done);
        });
        it('GET - /posts/:id - should return 200', function (done) {
            request(app)
                .get('/posts/' + mockObj.id)
                .expect(200, done);
        });
        it('PUT - /posts/:id - should return 200', function (done) {
            request(app)
                .put('/posts/' + mockObj.id)
                .send(mockObj)
                .expect(200, done);
        });
        it('DELETE - /posts/:id - should return 200', function (done) {
            request(app)
                .delete('/posts/' + mockObj.id)
                .expect(200, done);
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL3Bvc3RzL2luZGV4LXNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQyxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0IsSUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQy9CLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNuQyxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFckMsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ25FLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUNwRSxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDbEUsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBRXRFLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQztBQUNuQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDcEIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ3JCLElBQUksR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBRXBCLElBQUksT0FBTyxHQUFHO0lBQ1osRUFBRSxFQUFF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Q0FBQztvQkFDWixJQUFJLEVBQUUsQ0FBQztnQkFDVCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLHdCQUF3QixFQUFFO2dCQUMzQixNQUFNLENBQUMsTUFBTSxDQUFDO29CQUNaLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZCLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNaLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUNILFFBQVEsQ0FBQyxjQUFjLEVBQUU7UUFFdkIsRUFBRSxDQUFDLGtDQUFrQyxFQUFFLFVBQVMsSUFBSTtZQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDO2lCQUNULEdBQUcsQ0FBQyxRQUFRLENBQUM7aUJBQ2IsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxtQ0FBbUMsRUFBRSxVQUFTLElBQUk7WUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQztpQkFDVCxJQUFJLENBQUMsUUFBUSxDQUFDO2lCQUNkLElBQUksQ0FBQyxPQUFPLENBQUM7aUJBQ2IsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxzQ0FBc0MsRUFBRSxVQUFTLElBQUk7WUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQztpQkFDVCxHQUFHLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUM7aUJBQzNCLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsc0NBQXNDLEVBQUUsVUFBUyxJQUFJO1lBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUM7aUJBQ1QsR0FBRyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDO2lCQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDO2lCQUNiLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMseUNBQXlDLEVBQUUsVUFBUyxJQUFJO1lBQ3pELE9BQU8sQ0FBQyxHQUFHLENBQUM7aUJBQ1QsTUFBTSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDO2lCQUM5QixNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFTCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJwbHVnaW5zL3Bvc3RzL2luZGV4LXNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
