"use strict";
var assert = require('assert');
var express = require('express');
var request = require('supertest');
var App = require('./app').default;
var Plugin = require('./plugins/app-plugin');
describe('App', function () {
    var instance;
    var app = express();
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
                    .all(function (req, res, next) {
                    console.log('tags plugin middleware', req.method, req.url);
                    next();
                })
                    .get(function (req, res, next) {
                    res.status(200).json({
                        message: 'Welcome'
                    });
                })
                    .put(function (req, res, next) {
                    res.status(200).json({
                        message: 'Updated'
                    });
                })
                    .post(function (req, res, next) {
                    res.status(201).json({
                        message: 'Saved'
                    });
                })
                    .delete(function (req, res, next) {
                    res.status(200).json({
                        message: 'Removed'
                    });
                });
            }
            ;
            var p = TagsPlugin(instance);
            assert(p);
        });
        it('should mounted routes', function (done) {
            request(instance)
                .get('/tags/1')
                .set('Content-Type', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
        it('should mounted put route', function (done) {
            request(instance)
                .put('/tags/1')
                .send({ name: 'test' })
                .set('Content-Type', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
        it('should mounted post route', function (done) {
            request(instance)
                .post('/tags')
                .send({ name: 'test' })
                .set('Content-Type', 'application/json')
                .expect('Content-Type', /json/)
                .expect(201, done);
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvYXBwLXNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNuQyxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDckMsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUNyQyxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUcvQyxRQUFRLENBQUMsS0FBSyxFQUFFO0lBQ1osSUFBSSxRQUFRLENBQUM7SUFDYixJQUFJLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztJQUNwQixFQUFFLENBQUMsbUJBQW1CLEVBQUUsVUFBVSxJQUFJO1FBQ2xDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNaLElBQUksRUFBRSxDQUFDO0lBQ1gsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsd0JBQXdCLEVBQUUsVUFBVSxJQUFJO1FBQ3ZDLFFBQVEsR0FBRyxJQUFJLEdBQUcsQ0FBQztZQUNmLEdBQUcsRUFBRSxHQUFHO1NBQ1gsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pCLElBQUksRUFBRSxDQUFDO0lBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDQSxFQUFFLENBQUMsb0JBQW9CLEVBQUUsVUFBVSxJQUFJO1FBQ2xDLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ2hELFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQixJQUFJLEVBQUUsQ0FBQztJQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ04sRUFBRSxDQUFDLHFDQUFxQyxFQUFFLFVBQVUsSUFBSTtRQUNyRCxPQUFPLENBQUMsUUFBUSxDQUFDO2FBQ1osR0FBRyxDQUFDLFdBQVcsQ0FBQzthQUNoQixHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDO2FBQ3ZDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDO2FBQzlCLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsU0FBUyxFQUFFO1FBSWhCLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRTtZQUNyQixvQkFBb0IsR0FBRyxFQUFFLFNBQVM7Z0JBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDbEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO3FCQUMzQixHQUFHLENBQUMsVUFBUyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7b0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzNELElBQUksRUFBRSxDQUFDO2dCQUNULENBQUMsQ0FBQztxQkFDRCxHQUFHLENBQUMsVUFBUyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7b0JBQzFCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUNuQixPQUFPLEVBQUUsU0FBUztxQkFDbkIsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQztxQkFDRCxHQUFHLENBQUMsVUFBUyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7b0JBQzFCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUNuQixPQUFPLEVBQUUsU0FBUztxQkFDbkIsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQztxQkFDRCxJQUFJLENBQUMsVUFBUyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7b0JBQzNCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUNuQixPQUFPLEVBQUUsT0FBTztxQkFDakIsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQztxQkFDRCxNQUFNLENBQUMsVUFBUyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7b0JBQzdCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUNuQixPQUFPLEVBQUUsU0FBUztxQkFDbkIsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztZQUFBLENBQUM7WUFDRixJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsdUJBQXVCLEVBQUUsVUFBUyxJQUFJO1lBQ3JDLE9BQU8sQ0FBQyxRQUFRLENBQUM7aUJBQ1osR0FBRyxDQUFDLFNBQVMsQ0FBQztpQkFDZCxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDO2lCQUN2QyxNQUFNLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQztpQkFDOUIsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxVQUFTLElBQUk7WUFDeEMsT0FBTyxDQUFDLFFBQVEsQ0FBQztpQkFDWixHQUFHLENBQUMsU0FBUyxDQUFDO2lCQUNkLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQztpQkFDcEIsR0FBRyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQztpQkFDdkMsTUFBTSxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUM7aUJBQzlCLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFFRixFQUFFLENBQUMsMkJBQTJCLEVBQUUsVUFBUyxJQUFJO1lBQzFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7aUJBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQztpQkFDYixJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7aUJBQ3BCLEdBQUcsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUM7aUJBQ3ZDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDO2lCQUM5QixNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAtc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
