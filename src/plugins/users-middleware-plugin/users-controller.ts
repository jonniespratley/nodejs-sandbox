'use strict';
const path = require('path');
const UserModel = require('./user-model.js').default;
const UsersService = require('./users-service.js').default;

let users = [
    {id: 1, name: 'watch', description: 'Tell time with this amazing watch', price: 30.00},
    {id: 2, name: 'sandals', description: 'Walk in comfort with these sandals', price: 10.00}
];

/**
 * TODO - Describe what your controller does.
 *
 * @class         Users.Model
 * @module        Users
 * @constructor
 */
export default class UsersController {
    users:any;

    constructor(options) {
        this.users = new UsersService();
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
        var model = new UserModel(req.body);
        model.id = users.length + 1;
        console.log(
            'creating', model
        );
        users.push(model);
        res.json(model);
    }

    put_route(req, res, next) {
        if (req.params.id > (users.length - 1) || req.params.id < 0) {
            res.statusCode = 404;
            res.end('No product found for that ID');
        }
        users[req.params.id] = req.body;
        res.json(req.body);
    }

    delete_route(req, res, next) {
        if (!req.params.id) {
            req.status(404).json({error: 'No user found for that ID'})
        }
        users.splice(req.param.id, 1);
        res.json(users);
    }
}
