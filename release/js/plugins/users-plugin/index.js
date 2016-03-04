'use strict';
var Controller = require('./controller').default;
var Model = require('./model').default;
var Router = require('./router').default;
var Service = require('./service').default;
/**
 * @class         Passes
 * @module        Passes
 * @constructor
 */
var UsersPlugin = (function () {
    function UsersPlugin(app) {
        this.Router = new Router(app);
        console.log('UsersPlugin Plugin Constructor');
    }
    return UsersPlugin;
})();
exports["default"] = UsersPlugin;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL3VzZXJzLXBsdWdpbi9pbmRleC50cyJdLCJuYW1lcyI6WyJVc2Vyc1BsdWdpbiIsIlVzZXJzUGx1Z2luLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ25ELElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDekMsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUMzQyxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBRTdDOzs7O0dBSUc7QUFDSDtJQVFDQSxxQkFBWUEsR0FBT0E7UUFDbEJDLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQzlCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxnQ0FBZ0NBLENBQUNBLENBQUNBO0lBRS9DQSxDQUFDQTtJQUVGRCxrQkFBQ0E7QUFBREEsQ0FkQSxBQWNDQSxJQUFBO0FBZEQsZ0NBY0MsQ0FBQSIsImZpbGUiOiJwbHVnaW5zL3VzZXJzLXBsdWdpbi9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
