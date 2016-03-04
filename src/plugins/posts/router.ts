 'use strict';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Controller = require('./controller').default;
/**
 * @class         posts Router
 * @module        Users
 // curl -X GET http://localhost:3000/users/2
 // curl -X POST -d "name=flops&description=sandals&price=12.00" http://localhost:3000/users
 // curl -X PUT -d "name=flipflops&description=sandals&price=12.00" http://localhost:3000/users/3
 // curl -X DELETE http://localhost:3000/users/2
 * @constructor
 */
export default class Router {
    constructor(app:express) {
        console.log('Router Constructor');

        const controller = new Controller();
        const router = express();

        router.use(controller.use);
        router.all('/posts/*', controller.all);
        router.get('/posts?', controller.get_route);
        router.get('/posts/:id?', controller.get_route)
        router.delete('/posts/:id', controller.delete_route)
        router.post('/posts', bodyParser.json(), controller.post_route)
        router.put('/posts/:id', bodyParser.json(), controller.put_route)

        router.use(bodyParser.json());


        app.use('/', router);
    }
}
