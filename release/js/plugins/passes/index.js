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
})();
exports["default"] = Passes;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL3Bhc3Nlcy9pbmRleC50cyJdLCJuYW1lcyI6WyJQYXNzZXMiLCJQYXNzZXMuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDbkQsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUN6QyxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQzNDLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDN0MsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ25DOzs7O0dBSUc7QUFFSDtJQVFJQSxnQkFBWUEsR0FBV0E7UUFDbkJDLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQzlCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxvQkFBb0JBLENBQUNBLENBQUNBO0lBRXRDQSxDQUFDQTtJQUVMRCxhQUFDQTtBQUFEQSxDQWRBLEFBY0NBLElBQUE7QUFkRCwyQkFjQyxDQUFBIiwiZmlsZSI6InBsdWdpbnMvcGFzc2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
