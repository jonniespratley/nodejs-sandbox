'use strict';
var UsersService = require('./users-service.js');
let users = [
    { id: 0, name: 'watch', description: 'Tell time with this amazing watch', price: 30.00 },
    { id: 1, name: 'sandals', description: 'Walk in comfort with these sandals', price: 10.00 },
    { id: 2, name: 'sunglasses', description: 'Protect your eyes in style', price: 25.00 }
];
/**
 * TODO - Describe what your controller does.
 *
 * @class         Users.Model
 * @module        Users
 * @constructor
 */
class UsersController {
    constructor(options) {
        this.users = new UsersService.UsersService();
        console.log('Controller Constructor');
    }
    use(req, res, next) {
        console.log('Time: ', Date.now());
        console.log('users-controller.use', req.method, req.url);
        next();
    }
    all(req, res, next) {
        if (req.params.id) {
            req.id = req.params.id;
            console.log('Got user id', req.id);
        }
        console.log('users-controller.all', req.method, req.url);
        next();
    }
    index(req, res, next) {
        next();
    }
    get_route(req, res, next) {
        if (req.params.id > (users.length - 1) || req.params.id < 0) {
            res.statusCode = 404;
            res.end('Not Found');
        }
        res.json(users[req.params.id]);
    }
    post_route(req, res, next) {
        console.log(req.body);
        if (typeof req.body.name === 'undefined') {
            res.statusCode = 400;
            res.end('a product name is required');
        }
        users.push(req.body);
        res.send(req.body);
    }
    put_route(req, res, next) {
        if (req.params.id > (users.length - 1) || req.params.id < 0) {
            res.statusCode = 404;
            res.end('No product found for that ID');
        }
        users[req.params.id] = req.body;
        res.send(req.body);
    }
    delete_route(req, res, next) {
        if (!req.id) {
            req.status(404).json({ error: 'No user found for that ID' });
        }
        users.splice(req.id, 1);
        res.json(users);
    }
}
exports.UsersController = UsersController;
