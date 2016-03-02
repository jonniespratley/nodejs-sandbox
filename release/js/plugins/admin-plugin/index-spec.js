'use strict';
var path = require('path');
var assert = require('assert');
var express = require('express');
var request = require('supertest');
var plugin = require('./').default;
var Program = require(path.resolve(__dirname, '../../program')).default;
var program = new Program('test');
program.use(plugin);
var app = program.get('app');
describe('AdminPlugin plugin', function () {
    it('should be defined', function () {
        assert(plugin);
    });
    describe('Controller', function () {
        it('method - should do ...', function (done) {
            //
            done();
        });
    });
    describe('Router', function () {
        it('GET - /admin - should return 200', function (done) {
            request(app)
                .get('/admin')
                .expect(200, done);
        });
    });
    describe('Service', function () {
        it('method - should do ...', function (done) {
            done();
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbnMvYWRtaW4tcGx1Z2luL2luZGV4LXNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBRWIsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQyxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbkMsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3JDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDckMsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBRTFFLElBQUksT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFcEIsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUc3QixRQUFRLENBQUMsb0JBQW9CLEVBQUU7SUFFM0IsRUFBRSxDQUFDLG1CQUFtQixFQUFFO1FBQ3BCLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQixDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxZQUFZLEVBQUU7UUFDbkIsRUFBRSxDQUFDLHdCQUF3QixFQUFFLFVBQUMsSUFBSTtZQUM5QixFQUFFO1lBQ0YsSUFBSSxFQUFFLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLFFBQVEsRUFBRTtRQUNmLEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRSxVQUFDLElBQUk7WUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQztpQkFDUCxHQUFHLENBQUMsUUFBUSxDQUFDO2lCQUNiLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxTQUFTLEVBQUU7UUFDaEIsRUFBRSxDQUFDLHdCQUF3QixFQUFFLFVBQUMsSUFBSTtZQUM5QixJQUFJLEVBQUUsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJwbHVnaW5zL2FkbWluLXBsdWdpbi9pbmRleC1zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0Jyk7XG5jb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuY29uc3QgcmVxdWVzdCA9IHJlcXVpcmUoJ3N1cGVydGVzdCcpO1xuY29uc3QgcGx1Z2luID0gcmVxdWlyZSgnLi8nKS5kZWZhdWx0O1xuY29uc3QgUHJvZ3JhbSA9IHJlcXVpcmUocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uLy4uL3Byb2dyYW0nKSkuZGVmYXVsdDtcblxudmFyIHByb2dyYW0gPSBuZXcgUHJvZ3JhbSgndGVzdCcpO1xucHJvZ3JhbS51c2UocGx1Z2luKTtcblxudmFyIGFwcCA9IHByb2dyYW0uZ2V0KCdhcHAnKTtcblxuXG5kZXNjcmliZSgnQWRtaW5QbHVnaW4gcGx1Z2luJywgKCkgPT4ge1xuXG4gICAgaXQoJ3Nob3VsZCBiZSBkZWZpbmVkJywgKCkgPT4ge1xuICAgICAgICBhc3NlcnQocGx1Z2luKTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdDb250cm9sbGVyJywgKCkgPT4ge1xuICAgICAgICBpdCgnbWV0aG9kIC0gc2hvdWxkIGRvIC4uLicsIChkb25lKSA9PiB7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdSb3V0ZXInLCAoKSA9PiB7XG4gICAgICAgIGl0KCdHRVQgLSAvYWRtaW4gLSBzaG91bGQgcmV0dXJuIDIwMCcsIChkb25lKSA9PiB7XG4gICAgICAgICAgICByZXF1ZXN0KGFwcClcbiAgICAgICAgICAgICAgICAuZ2V0KCcvYWRtaW4nKVxuICAgICAgICAgICAgICAgIC5leHBlY3QoMjAwLCBkb25lKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnU2VydmljZScsICgpID0+IHtcbiAgICAgICAgaXQoJ21ldGhvZCAtIHNob3VsZCBkbyAuLi4nLCAoZG9uZSkgPT4ge1xuICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxufSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
