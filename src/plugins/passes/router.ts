'use strict';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Controller = require('./controller').default;

/**
 * @class PassesRouter
 * @module        plugins/passes
 * @constructor
 */
export default class Router {
    constructor(app:express) {
        console.log('Router Constructor');

        const controller = new Controller();
        const router = express();

        router.use(controller.use);
        router.all('/passes/*', controller.all);
        router.get('/passes?', controller.get_route);
        router.get('/passes/:id?', controller.get_route)
        router.delete('/passes/:id', controller.delete_route)
        router.post('/passes', bodyParser.json(), controller.post_route)
        router.put('/passes/:id', bodyParser.json(), controller.put_route)

        router.use(bodyParser.json());


        app.use('/', router);
    }
}
