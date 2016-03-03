'use strict';
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var Controller = require('./controller').default;
/**
 * @class         Passes Router
 * @module        Users
 // curl -X GET http://localhost:3000/users/2
 // curl -X POST -d "name=flops&description=sandals&price=12.00" http://localhost:3000/users
 // curl -X PUT -d "name=flipflops&description=sandals&price=12.00" http://localhost:3000/users/3
 // curl -X DELETE http://localhost:3000/users/2
 * @constructor
 */
var Router = (function () {
    function Router(app) {
        console.log('Router Constructor');
        var controller = new Controller();
        var router = express();
        router.use(controller.use);
        router.all('/passes/*', controller.all);
        router.get('/passes/:id?', controller.get_route);
        router.delete('/passes/:id', controller.delete_route);
        router.post('/passes', bodyParser.json(), controller.post_route);
        router.put('/passes/:id', bodyParser.json(), controller.put_route);
        router.use(bodyParser.json());
        app.use('/', router);
    }
    return Router;
}());
exports["default"] = Router;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL3Bhc3Nlcy9yb3V0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ25DLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QixJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDMUMsSUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUNuRDs7Ozs7Ozs7R0FRRztBQUNIO0lBQ0ksZ0JBQVksR0FBVztRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFFbEMsSUFBTSxVQUFVLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUNwQyxJQUFNLE1BQU0sR0FBRyxPQUFPLEVBQUUsQ0FBQztRQUV6QixNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQixNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ2hELE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUNyRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ2hFLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7UUFFbEUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUc5QixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0wsYUFBQztBQUFELENBbkJBLEFBbUJDLElBQUE7QUFuQkQsMkJBbUJDLENBQUEiLCJmaWxlIjoicGx1Z2lucy9wYXNzZXMvcm91dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
