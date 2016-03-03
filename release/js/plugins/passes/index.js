'use strict';
var Controller = require('./controller').default;
var Model = require('./model').default;
var Router = require('./router').default;
var Service = require('./service').default;
var express = require('express');
/**
 * @class         Passes
 * @module        Passes
 * @constructor
 */
var Passes = (function () {
    function Passes(app) {
        this.Router = new Router(app);
        console.log('Plugin Constructor');
    }
    return Passes;
}());
exports["default"] = Passes;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbnMvcGFzc2VzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDbkQsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUN6QyxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQzNDLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDN0MsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ25DOzs7O0dBSUc7QUFDSDtJQVFJLGdCQUFZLEdBQVc7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFFdEMsQ0FBQztJQUVMLGFBQUM7QUFBRCxDQWRBLEFBY0MsSUFBQTtBQWRELDJCQWNDLENBQUEiLCJmaWxlIjoicGx1Z2lucy9wYXNzZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5jb25zdCBDb250cm9sbGVyID0gcmVxdWlyZSgnLi9jb250cm9sbGVyJykuZGVmYXVsdDtcbmNvbnN0IE1vZGVsID0gcmVxdWlyZSgnLi9tb2RlbCcpLmRlZmF1bHQ7XG5jb25zdCBSb3V0ZXIgPSByZXF1aXJlKCcuL3JvdXRlcicpLmRlZmF1bHQ7XG5jb25zdCBTZXJ2aWNlID0gcmVxdWlyZSgnLi9zZXJ2aWNlJykuZGVmYXVsdDtcbmNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG4vKipcbiAqIEBjbGFzcyAgICAgICAgIFBhc3Nlc1xuICogQG1vZHVsZSAgICAgICAgUGFzc2VzXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFzc2VzIHtcbiAgICBuYW1lOnN0cmluZztcbiAgICBvcHRpb25zOm9iamVjdDtcbiAgICBDb250cm9sbGVyOkNvbnRyb2xsZXI7XG4gICAgTW9kZWw6TW9kZWw7XG4gICAgUm91dGVyOlJvdXRlcjtcbiAgICBTZXJ2aWNlOlNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihhcHA6ZXhwcmVzcykge1xuICAgICAgICB0aGlzLlJvdXRlciA9IG5ldyBSb3V0ZXIoYXBwKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1BsdWdpbiBDb25zdHJ1Y3RvcicpO1xuXG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
