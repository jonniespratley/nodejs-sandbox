'use strict';
var assert = require('assert');
var express = require('express');
var request = require('supertest');
var plugin = require('./');
var app = express();
plugin(app);
describe('app-plugin', function () {
    it('should be defined', function () {
        assert(plugin);
    });
    it('GET - /newRoute - should return 200', function (done) {
        request(app)
            .get('/newRoute')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('POST - /newRoute - should return 201', function (done) {
        request(app)
            .post('/newRoute')
            .send({
            name: 'Jonnie'
        })
            .expect('Content-Type', /json/)
            .expect(201, done);
    });
    it('PUT - /newRoute/:id - should return 200', function (done) {
        request(app)
            .put('/newRoute/1')
            .send({
            name: 'Jonnie Dollas'
        })
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('DELETE - /newRoute/:id - should return 200', function (done) {
        request(app)
            .delete('/newRoute/1')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL2FwcC1wbHVnaW4vaW5kZXgtc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ25DLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNyQyxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFN0IsSUFBSSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFDcEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBRVosUUFBUSxDQUFDLFlBQVksRUFBRTtJQUVyQixFQUFFLENBQUMsbUJBQW1CLEVBQUU7UUFDdEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHFDQUFxQyxFQUFFLFVBQVMsSUFBSTtRQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDO2FBQ1QsR0FBRyxDQUFDLFdBQVcsQ0FBQzthQUNoQixNQUFNLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQzthQUM5QixNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHNDQUFzQyxFQUFFLFVBQVMsSUFBSTtRQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDO2FBQ1QsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNqQixJQUFJLENBQUM7WUFDSixJQUFJLEVBQUUsUUFBUTtTQUNmLENBQUM7YUFDRCxNQUFNLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQzthQUM5QixNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHlDQUF5QyxFQUFFLFVBQVMsSUFBSTtRQUN6RCxPQUFPLENBQUMsR0FBRyxDQUFDO2FBQ1QsR0FBRyxDQUFDLGFBQWEsQ0FBQzthQUNsQixJQUFJLENBQUM7WUFDSixJQUFJLEVBQUUsZUFBZTtTQUN0QixDQUFDO2FBQ0QsTUFBTSxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUM7YUFDOUIsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw0Q0FBNEMsRUFBRSxVQUFTLElBQUk7UUFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQzthQUNULE1BQU0sQ0FBQyxhQUFhLENBQUM7YUFDckIsTUFBTSxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUM7YUFDOUIsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDLENBQUMsQ0FBQztBQUVMLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InBsdWdpbnMvYXBwLXBsdWdpbi9pbmRleC1zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
