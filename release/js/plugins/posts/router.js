'use strict';
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var Controller = require('./controller').default;
/**
 * @class         posts Router
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
        router.all('/posts/*', controller.all);
        router.get('/posts?', controller.get_route);
        router.get('/posts/:id?', controller.get_route);
        router.delete('/posts/:id', controller.delete_route);
        router.post('/posts', bodyParser.json(), controller.post_route);
        router.put('/posts/:id', bodyParser.json(), controller.put_route);
        router.use(bodyParser.json());
        app.use('/', router);
    }
    return Router;
}());
exports["default"] = Router;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL3Bvc3RzL3JvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQyxZQUFZLENBQUM7QUFDZCxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbkMsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUMxQyxJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ25EOzs7Ozs7OztHQVFHO0FBQ0g7SUFDSSxnQkFBWSxHQUFXO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUVsQyxJQUFNLFVBQVUsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQ3BDLElBQU0sTUFBTSxHQUFHLE9BQU8sRUFBRSxDQUFDO1FBRXpCLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQy9DLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUNwRCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQy9ELE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7UUFFakUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUc5QixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0wsYUFBQztBQUFELENBcEJBLEFBb0JDLElBQUE7QUFwQkQsMkJBb0JDLENBQUEiLCJmaWxlIjoicGx1Z2lucy9wb3N0cy9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
