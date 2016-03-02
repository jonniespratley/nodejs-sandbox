'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var UsersController = require('./users-controller.js');
function routes() {
    console.log('Router Constructor');
    var app = express();
    var controller = new UsersController.UsersController();
    var router = new express.Router();
    router.use(function (err, req, res, next) {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    });
    router.all('/users/*', controller.all);
    router.get('/users', controller.get_route);
    router.get('/users/:id?', controller.get_route);
    router.delete('/users/:id', controller.delete_route);
    router.post('/users', bodyParser.json(), controller.post_route);
    router.put('/users/:id', bodyParser.json(), controller.put_route);
    router.use(controller.use);
    app.use(bodyParser.json());
    app.use('/', router);
    return app;
}
exports.default = routes;
//# sourceMappingURL=users-router.js.map