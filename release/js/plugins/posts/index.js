'use strict';
var Controller = require('./controller').default;
var Model = require('./model').default;
var Router = require('./router').default;
var Service = require('./service').default;
/**
 * This is the Passes Plugin
 * @module        Passes
 * @constructor
 */
var Plugin = (function () {
    /**
     * Initialize the app
     * @constructor
     * @param app
     */
    function Plugin(app) {
        this.Router = new Router(app);
        console.log('Plugin Constructor');
    }
    return Plugin;
}());
exports["default"] = Plugin;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL3Bvc3RzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDbkQsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUN6QyxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQzNDLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFHN0M7Ozs7R0FJRztBQUNIO0lBUUk7Ozs7T0FJRztJQUNILGdCQUFZLEdBQU87UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUV0QyxDQUFDO0lBRUwsYUFBQztBQUFELENBbkJBLEFBbUJDLElBQUE7QUFuQkQsMkJBbUJDLENBQUEiLCJmaWxlIjoicGx1Z2lucy9wb3N0cy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
