'use strict';
import express = require('express');
import path = require('path');
import bodyParser = require('body-parser');
const UsersController = require('./users-controller').default;
/**
 * @class         Users
 * @module        Users
 * @constructor
 */
export default function routes() {
    console.log('Router Constructor');
    // curl -X GET http://localhost:3000/users/2
    // curl -X POST -d "name=flops&description=sandals&price=12.00" http://localhost:3000/users
// curl -X PUT -d "name=flipflops&description=sandals&price=12.00" http://localhost:3000/users/3
// curl -X DELETE http://localhost:3000/users/2
    var app = express();
    var controller = new UsersController();
    var router = new express.Router();


    //error handler
    router.use(function (err, req, res, next) {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    });

    router.all('/users/*', controller.all)
    router.get('/users', controller.get_route);
    router.get('/users/:id?', controller.get_route)
    router.delete('/users/:id', controller.delete_route)

    router.post('/users', bodyParser.json(), controller.post_route)
    router.put('/users/:id', bodyParser.json(), controller.put_route)
    router.use(controller.use);

    app.use(bodyParser.json());
    app.use('/', router);
    return app;
}
