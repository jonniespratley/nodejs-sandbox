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
})();
exports["default"] = Router;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL3Bhc3Nlcy9yb3V0ZXIudHMiXSwibmFtZXMiOlsiUm91dGVyIiwiUm91dGVyLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbkMsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUMxQyxJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ25EOzs7Ozs7OztHQVFHO0FBQ0g7SUFDSUEsZ0JBQVlBLEdBQVdBO1FBQ25CQyxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxvQkFBb0JBLENBQUNBLENBQUNBO1FBRWxDQSxJQUFNQSxVQUFVQSxHQUFHQSxJQUFJQSxVQUFVQSxFQUFFQSxDQUFDQTtRQUNwQ0EsSUFBTUEsTUFBTUEsR0FBR0EsT0FBT0EsRUFBRUEsQ0FBQ0E7UUFFekJBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLFVBQVVBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQzNCQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxXQUFXQSxFQUFFQSxVQUFVQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUN4Q0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsY0FBY0EsRUFBRUEsVUFBVUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQUE7UUFDaERBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLGFBQWFBLEVBQUVBLFVBQVVBLENBQUNBLFlBQVlBLENBQUNBLENBQUFBO1FBQ3JEQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxFQUFFQSxVQUFVQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFFQSxVQUFVQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFBQTtRQUNoRUEsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsYUFBYUEsRUFBRUEsVUFBVUEsQ0FBQ0EsSUFBSUEsRUFBRUEsRUFBRUEsVUFBVUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQUE7UUFFbEVBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBLENBQUNBO1FBRzlCQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxNQUFNQSxDQUFDQSxDQUFDQTtJQUN6QkEsQ0FBQ0E7SUFDTEQsYUFBQ0E7QUFBREEsQ0FuQkEsQUFtQkNBLElBQUE7QUFuQkQsMkJBbUJDLENBQUEiLCJmaWxlIjoicGx1Z2lucy9wYXNzZXMvcm91dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
