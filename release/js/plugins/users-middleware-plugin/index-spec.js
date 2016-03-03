'use strict';
var assert = require('assert');
var path = require('path');
var fs = require('fs-extra');
var express = require('express');
var request = require('supertest');
var UsersPlugin = require(path.resolve(__dirname, './index')).default;
var Router = require(path.resolve(__dirname, './users-router'));
var UserModel = require(path.resolve(__dirname, './user-model')).default;
var UsersService = require(path.resolve(__dirname, './users-service')).default;
var service = null;
var instance = null;
var app = express();
describe('UsersPlugin', function () {
    it('should be defined', function (done) {
        assert(UsersPlugin);
        done();
    });
    it('should create new instance', function (done) {
        instance = new UsersPlugin(app);
        done();
    });
    xit('should mount to express app', function (done) {
        app.use('/', Router.default());
        done();
    });
    describe('Users Router', function () {
        it('GET - /users - should return 200', function (done) {
            request(app)
                .get('/users')
                .expect(200, done);
        });
        it('GET - /users/:id - should return 200', function (done) {
            request(app)
                .get('/users/1')
                .expect(200, done);
        });
        it('POST - /users - should return 200', function (done) {
            request(app)
                .post('/users')
                .send({
                name: 'test-user'
            })
                .expect(200, done);
        });
        it('POST - /users - should return 200', function (done) {
            request(app)
                .post('/users')
                .send({
                name: 'test-user'
            })
                .expect(200, done);
        });
        it('PUT - /users/:id - should return 200', function (done) {
            request(app)
                .put('/users/1')
                .send({
                id: 1,
                name: 'updated-user'
            })
                .expect(200, done);
        });
        it('DELETE - /users/:id - should return 200', function (done) {
            request(app)
                .delete('/users/3')
                .expect(200, done);
        });
    });
    describe('Users Controller', function () {
        //
    });
    describe('Users Model', function () {
        it('should return model', function (done) {
            var u = new UserModel({ id: 'test' });
            assert(u);
            assert(u.id, 'has passed property');
            done();
        });
    });
    describe('UsersService', function () {
        var testId = '';
        var testUser = new UserModel({
            id: 'user-test',
            username: 'test',
            email: 'test@gmail.com'
        });
        before(function (done) {
            service = new UsersService();
            service.save(new UserModel({ name: 'test' })).then(function (resp) {
                testId = resp;
                console.log(resp);
                done();
            });
        });
        it('should have an instance', function () {
            assert(service);
        });
        it('find() - should get all users from data store', function (done) {
            service.find(testUser.id).then(function (resp) {
                console.log(resp);
                assert(resp);
                done();
            }).catch(function (err) {
                assert.fail(err);
                done();
            });
        });
        it('save() - should save a user to data store', function (done) {
            service.save(testUser).then(function (resp) {
                console.log(resp);
                assert(resp);
                done();
            }).catch(function (err) {
                assert.fail(err);
                done();
            });
        });
        it('save() should update a user in data store', function (done) {
            service.save({
                id: 'user-test',
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
        it('save() - should reject', function () {
            service.save({}).then(function (resp) {
                assert.fail(resp);
                done();
            }).catch(function (err) {
                assert(err);
                done();
            });
        });
        it('get() - should get a user from data store', function (done) {
            assert(testId);
            service.get(testId).then(function (resp) {
                assert(resp);
                done();
            }).catch(function (err) {
                assert.fail(err);
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
        it('remove() - should remove a user from data store', function (done) {
            assert(testId);
            service.remove(testId).then(function (resp) {
                assert(resp);
                done();
            }).catch(function (err) {
                assert.fail(err);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbnMvdXNlcnMtbWlkZGxld2FyZS1wbHVnaW4vaW5kZXgtc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLElBQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUMvQixJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbkMsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXJDLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUN4RSxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0FBQ2xFLElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUMzRSxJQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUNqRixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDbkIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBRXBCLElBQUksR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBR3BCLFFBQVEsQ0FBQyxhQUFhLEVBQUU7SUFFcEIsRUFBRSxDQUFDLG1CQUFtQixFQUFFLFVBQVUsSUFBSTtRQUNsQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEIsSUFB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LENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLElBQUksRUFBRSxDQUFDO1lBQ1gsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUdILEVBQUUsQ0FBQywwQkFBMEIsRUFBRTtZQUMzQixPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUk7Z0JBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xCLElBQUksRUFBRSxDQUFDO1lBQ1gsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRztnQkFDbEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNaLElBQUksRUFBRSxDQUFDO1lBQ1gsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyx3QkFBd0IsRUFBRTtZQUN6QixNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUNWLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InBsdWdpbnMvdXNlcnMtbWlkZGxld2FyZS1wbHVnaW4vaW5kZXgtc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMtZXh0cmEnKTtcbmNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG5jb25zdCByZXF1ZXN0ID0gcmVxdWlyZSgnc3VwZXJ0ZXN0Jyk7XG5cbmNvbnN0IFVzZXJzUGx1Z2luID0gcmVxdWlyZShwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9pbmRleCcpKS5kZWZhdWx0O1xuY29uc3QgUm91dGVyID0gcmVxdWlyZShwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi91c2Vycy1yb3V0ZXInKSk7XG5jb25zdCBVc2VyTW9kZWwgPSByZXF1aXJlKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3VzZXItbW9kZWwnKSkuZGVmYXVsdDtcbmNvbnN0IFVzZXJzU2VydmljZSA9IHJlcXVpcmUocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vdXNlcnMtc2VydmljZScpKS5kZWZhdWx0O1xudmFyIHNlcnZpY2UgPSBudWxsO1xudmFyIGluc3RhbmNlID0gbnVsbDtcblxudmFyIGFwcCA9IGV4cHJlc3MoKTtcblxuXG5kZXNjcmliZSgnVXNlcnNQbHVnaW4nLCBmdW5jdGlvbiAoKSB7XG5cbiAgICBpdCgnc2hvdWxkIGJlIGRlZmluZWQnLCBmdW5jdGlvbiAoZG9uZSkge1xuICAgICAgICBhc3NlcnQoVXNlcnNQbHVnaW4pO1xuICAgICAgICBkb25lKCk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIGNyZWF0ZSBuZXcgaW5zdGFuY2UnLCBmdW5jdGlvbiAoZG9uZSkge1xuICAgICAgICBpbnN0YW5jZSA9IG5ldyBVc2Vyc1BsdWdpbihhcHApO1xuICAgICAgICBkb25lKCk7XG4gICAgfSk7XG5cbiAgICB4aXQoJ3Nob3VsZCBtb3VudCB0byBleHByZXNzIGFwcCcsIGZ1bmN0aW9uIChkb25lKSB7XG4gICAgICAgIGFwcC51c2UoJy8nLCBSb3V0ZXIuZGVmYXVsdCgpKTtcbiAgICAgICAgZG9uZSgpO1xuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoJ1VzZXJzIFJvdXRlcicsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpdCgnR0VUIC0gL3VzZXJzIC0gc2hvdWxkIHJldHVybiAyMDAnLCBmdW5jdGlvbiAoZG9uZSkge1xuICAgICAgICAgICAgcmVxdWVzdChhcHApXG4gICAgICAgICAgICAgICAgLmdldCgnL3VzZXJzJylcbiAgICAgICAgICAgICAgICAuZXhwZWN0KDIwMCwgZG9uZSk7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgaXQoJ0dFVCAtIC91c2Vycy86aWQgLSBzaG91bGQgcmV0dXJuIDIwMCcsIGZ1bmN0aW9uIChkb25lKSB7XG4gICAgICAgICAgICByZXF1ZXN0KGFwcClcbiAgICAgICAgICAgICAgICAuZ2V0KCcvdXNlcnMvMScpXG4gICAgICAgICAgICAgICAgLmV4cGVjdCgyMDAsIGRvbmUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdCgnUE9TVCAtIC91c2VycyAtIHNob3VsZCByZXR1cm4gMjAwJywgZnVuY3Rpb24gKGRvbmUpIHtcbiAgICAgICAgICAgIHJlcXVlc3QoYXBwKVxuICAgICAgICAgICAgICAgIC5wb3N0KCcvdXNlcnMnKVxuICAgICAgICAgICAgICAgIC5zZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Rlc3QtdXNlcidcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5leHBlY3QoMjAwLCBkb25lKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoJ1BPU1QgLSAvdXNlcnMgLSBzaG91bGQgcmV0dXJuIDIwMCcsIGZ1bmN0aW9uIChkb25lKSB7XG4gICAgICAgICAgICByZXF1ZXN0KGFwcClcbiAgICAgICAgICAgICAgICAucG9zdCgnL3VzZXJzJylcbiAgICAgICAgICAgICAgICAuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICd0ZXN0LXVzZXInXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZXhwZWN0KDIwMCwgZG9uZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KCdQVVQgLSAvdXNlcnMvOmlkIC0gc2hvdWxkIHJldHVybiAyMDAnLCBmdW5jdGlvbiAoZG9uZSkge1xuICAgICAgICAgICAgcmVxdWVzdChhcHApXG4gICAgICAgICAgICAgICAgLnB1dCgnL3VzZXJzLzEnKVxuICAgICAgICAgICAgICAgIC5zZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICd1cGRhdGVkLXVzZXInXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZXhwZWN0KDIwMCwgZG9uZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KCdERUxFVEUgLSAvdXNlcnMvOmlkIC0gc2hvdWxkIHJldHVybiAyMDAnLCBmdW5jdGlvbiAoZG9uZSkge1xuICAgICAgICAgICAgcmVxdWVzdChhcHApXG4gICAgICAgICAgICAgICAgLmRlbGV0ZSgnL3VzZXJzLzMnKVxuICAgICAgICAgICAgICAgIC5leHBlY3QoMjAwLCBkb25lKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnVXNlcnMgQ29udHJvbGxlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9cbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdVc2VycyBNb2RlbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaXQoJ3Nob3VsZCByZXR1cm4gbW9kZWwnLCBmdW5jdGlvbiAoZG9uZSkge1xuICAgICAgICAgICAgdmFyIHUgPSBuZXcgVXNlck1vZGVsKHtpZDogJ3Rlc3QnfSk7XG4gICAgICAgICAgICBhc3NlcnQodSk7XG4gICAgICAgICAgICBhc3NlcnQodS5pZCwgJ2hhcyBwYXNzZWQgcHJvcGVydHknKTtcblxuICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdVc2Vyc1NlcnZpY2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0ZXN0SWQgPSAnJztcbiAgICAgICAgdmFyIHRlc3RVc2VyID0gbmV3IFVzZXJNb2RlbCh7XG4gICAgICAgICAgICBpZDogJ3VzZXItdGVzdCcsXG4gICAgICAgICAgICB1c2VybmFtZTogJ3Rlc3QnLFxuICAgICAgICAgICAgZW1haWw6ICd0ZXN0QGdtYWlsLmNvbSdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYmVmb3JlKGZ1bmN0aW9uIChkb25lKSB7XG4gICAgICAgICAgICBzZXJ2aWNlID0gbmV3IFVzZXJzU2VydmljZSgpO1xuICAgICAgICAgICAgc2VydmljZS5zYXZlKG5ldyBVc2VyTW9kZWwoe25hbWU6ICd0ZXN0J30pKS50aGVuKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICAgICAgdGVzdElkID0gcmVzcDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwKTtcbiAgICAgICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBpdCgnc2hvdWxkIGhhdmUgYW4gaW5zdGFuY2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhc3NlcnQoc2VydmljZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KCdmaW5kKCkgLSBzaG91bGQgZ2V0IGFsbCB1c2VycyBmcm9tIGRhdGEgc3RvcmUnLCBmdW5jdGlvbiAoZG9uZSkge1xuICAgICAgICAgICAgc2VydmljZS5maW5kKHRlc3RVc2VyLmlkKS50aGVuKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcCk7XG4gICAgICAgICAgICAgICAgYXNzZXJ0KHJlc3ApO1xuICAgICAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBhc3NlcnQuZmFpbChlcnIpO1xuICAgICAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdCgnc2F2ZSgpIC0gc2hvdWxkIHNhdmUgYSB1c2VyIHRvIGRhdGEgc3RvcmUnLCBmdW5jdGlvbiAoZG9uZSkge1xuICAgICAgICAgICAgc2VydmljZS5zYXZlKHRlc3RVc2VyKS50aGVuKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcCk7XG4gICAgICAgICAgICAgICAgYXNzZXJ0KHJlc3ApO1xuICAgICAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBhc3NlcnQuZmFpbChlcnIpO1xuICAgICAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdCgnc2F2ZSgpIHNob3VsZCB1cGRhdGUgYSB1c2VyIGluIGRhdGEgc3RvcmUnLCBmdW5jdGlvbiAoZG9uZSkge1xuICAgICAgICAgICAgc2VydmljZS5zYXZlKHtcbiAgICAgICAgICAgICAgICBpZDogJ3VzZXItdGVzdCcsXG4gICAgICAgICAgICAgICAgZW1haWw6ICd1cGRhdGVkQGdtYWlsLmNvbSdcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwKTtcbiAgICAgICAgICAgICAgICBhc3NlcnQocmVzcCk7XG4gICAgICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGFzc2VydC5mYWlsKGVycik7XG4gICAgICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KCdzYXZlKCkgLSBzaG91bGQgcmVqZWN0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VydmljZS5zYXZlKHt9KS50aGVuKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICAgICAgYXNzZXJ0LmZhaWwocmVzcCk7XG4gICAgICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGFzc2VydChlcnIpO1xuICAgICAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIGl0KCdnZXQoKSAtIHNob3VsZCBnZXQgYSB1c2VyIGZyb20gZGF0YSBzdG9yZScsIGZ1bmN0aW9uIChkb25lKSB7XG4gICAgICAgICAgICBhc3NlcnQodGVzdElkKVxuICAgICAgICAgICAgc2VydmljZS5nZXQodGVzdElkKS50aGVuKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICAgICAgYXNzZXJ0KHJlc3ApO1xuICAgICAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBhc3NlcnQuZmFpbChlcnIpO1xuICAgICAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdCgnZ2V0KCkgLSBzaG91bGQgcmVqZWN0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VydmljZS5nZXQoJ3Vua25vd24nKS50aGVuKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICAgICAgYXNzZXJ0LmZhaWwocmVzcCk7XG4gICAgICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGFzc2VydChlcnIpO1xuICAgICAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdCgncmVtb3ZlKCkgLSBzaG91bGQgcmVtb3ZlIGEgdXNlciBmcm9tIGRhdGEgc3RvcmUnLCBmdW5jdGlvbiAoZG9uZSkge1xuICAgICAgICAgICAgYXNzZXJ0KHRlc3RJZClcbiAgICAgICAgICAgIHNlcnZpY2UucmVtb3ZlKHRlc3RJZCkudGhlbihmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAgICAgICAgIGFzc2VydChyZXNwKTtcbiAgICAgICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgYXNzZXJ0LmZhaWwoZXJyKTtcbiAgICAgICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICBpdCgncmVtb3ZlKCkgLSBzaG91bGQgcmVqZWN0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VydmljZS5yZW1vdmUoJ3Vua25vd24nKS50aGVuKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICAgICAgYXNzZXJ0LmZhaWwocmVzcCk7XG4gICAgICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGFzc2VydChlcnIpO1xuICAgICAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdCgncmVtb3ZlKCkgLSB0aHJvdyBlcnJvcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFzc2VydC50aHJvd3MoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UucmVtb3ZlKG51bGwpO1xuICAgICAgICAgICAgfSwgRXJyb3IpO1xuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG59KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
