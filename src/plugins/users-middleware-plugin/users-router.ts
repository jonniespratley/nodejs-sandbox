'use strict';
import express = require('express');
import path = require('path');
import bodyParser = require('body-parser');
import UsersController = require('./users-controller.js');
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
    var controller = new UsersController.UsersController();
    var router = new express.Router();


    //error handler
    router.use(function(err, req, res, next) {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    });

    router
        .use(controller.use)
        .all('/:id?', controller.all)
        .get(controller.get_route)
        .delete( controller.delete_route)
        .post(bodyParser.json(), controller.post_route)
        .put(bodyParser.json(), controller.put_route)


    app.get('/users', controller.get_route);
    app.use(bodyParser.json());
    app.use('/users', router);
    return app;
}
