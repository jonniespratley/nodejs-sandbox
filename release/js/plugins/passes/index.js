'use strict';
var Controller = require('./controller').default;
var Model = require('./model').default;
var Router = require('./router').default;
var Service = require('./service').default;
var express = require('express');
/**
 * This is the Passes Plugin
 * @module        Passes
 * @constructor
 */
var Passes = (function () {
    /**
     * Initialize the app
     * @constructor
     * @param app
     */
    function Passes(app) {
        this.Router = new Router(app);
        console.log('Plugin Constructor');
    }
    return Passes;
})();
exports["default"] = Passes;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL3Bhc3Nlcy9pbmRleC50cyJdLCJuYW1lcyI6WyJQYXNzZXMiLCJQYXNzZXMuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDbkQsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUN6QyxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQzNDLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDN0MsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRW5DOzs7O0dBSUc7QUFDSDtJQVFJQTs7OztPQUlHQTtJQUNIQSxnQkFBWUEsR0FBV0E7UUFDbkJDLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQzlCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxvQkFBb0JBLENBQUNBLENBQUNBO0lBRXRDQSxDQUFDQTtJQUVMRCxhQUFDQTtBQUFEQSxDQW5CQSxBQW1CQ0EsSUFBQTtBQW5CRCwyQkFtQkMsQ0FBQSIsImZpbGUiOiJwbHVnaW5zL3Bhc3Nlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
