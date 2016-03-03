"use strict";
var assert = require('assert');
var express = require('express');
var request = require('supertest');
var App = require('./app').default;
var Plugin = require('./plugins/app-plugin');
var instance;
var app = express();
describe('App', function () {
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
    describe('App Routes', function () {
        it('should load plugin', function (done) {
            Plugin(instance);
            done();
        });
        it('GET - /newRoute - should return 200', function (done) {
            request(instance)
                .get('/newRoute')
                .set('Content-Type', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvYXBwLXNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNuQyxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDckMsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUNyQyxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUMvQyxJQUFJLFFBQVEsQ0FBQztBQUNiLElBQUksR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBRXBCLFFBQVEsQ0FBQyxLQUFLLEVBQUU7SUFDWixFQUFFLENBQUMsbUJBQW1CLEVBQUUsVUFBVSxJQUFJO1FBQ2xDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNaLElBQUksRUFBRSxDQUFDO0lBQ1gsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsd0JBQXdCLEVBQUUsVUFBVSxJQUFJO1FBQ3ZDLFFBQVEsR0FBRyxJQUFJLEdBQUcsQ0FBQztZQUNmLEdBQUcsRUFBRSxHQUFHO1NBQ1gsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pCLElBQUksRUFBRSxDQUFDO0lBQ1gsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsWUFBWSxFQUFFO1FBQ25CLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxVQUFVLElBQUk7WUFDbkMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pCLElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUMscUNBQXFDLEVBQUUsVUFBVSxJQUFJO1lBQ3BELE9BQU8sQ0FBQyxRQUFRLENBQUM7aUJBQ1osR0FBRyxDQUFDLFdBQVcsQ0FBQztpQkFDaEIsR0FBRyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQztpQkFDdkMsTUFBTSxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUM7aUJBQzlCLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC1zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
