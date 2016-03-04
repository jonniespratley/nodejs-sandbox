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
var PasskitDevices = (function () {
    function PasskitDevices(app) {
        this.Router = new Router(app);
        console.log('PasskitDevices Plugin Constructor');
    }
    return PasskitDevices;
})();
exports["default"] = PasskitDevices;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL3Bhc3NraXQtZGV2aWNlcy9pbmRleC50cyJdLCJuYW1lcyI6WyJQYXNza2l0RGV2aWNlcyIsIlBhc3NraXREZXZpY2VzLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ25ELElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDekMsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUMzQyxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQzdDLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNuQzs7OztHQUlHO0FBQ0g7SUFRQ0Esd0JBQVlBLEdBQVdBO1FBQ3RCQyxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxJQUFJQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUM5QkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsbUNBQW1DQSxDQUFDQSxDQUFDQTtJQUVsREEsQ0FBQ0E7SUFFRkQscUJBQUNBO0FBQURBLENBZEEsQUFjQ0EsSUFBQTtBQWRELG1DQWNDLENBQUEiLCJmaWxlIjoicGx1Z2lucy9wYXNza2l0LWRldmljZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
