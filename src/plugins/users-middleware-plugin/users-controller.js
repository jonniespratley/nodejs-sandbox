'use strict';
var UsersService = require('./users-service.js');
var UserModel = (function () {
    function UserModel(obj) {
        for (var prop in obj) {
            this[prop] = obj[prop];
            console.log('UserModel', prop, '=', obj[prop]);
        }
    }
    return UserModel;
})();
exports.UserModel = UserModel;
var users = [
    { id: 1, name: 'watch', description: 'Tell time with this amazing watch', price: 30.00 },
    { id: 2, name: 'sandals', description: 'Walk in comfort with these sandals', price: 10.00 }
];
/**
 * TODO - Describe what your controller does.
 *
 * @class         Users.Model
 * @module        Users
 * @constructor
 */
var UsersController = (function () {
    function UsersController(options) {
        this.users = new UsersService.UsersService();
        console.log('Controller Constructor');
    }
    UsersController.prototype.use = function (req, res, next) {
        console.log('Time: ', Date.now());
        console.log('users-controller.use', req.method, req.url);
        next();
    };
    UsersController.prototype.all = function (req, res, next) {
        if (req.params.id) {
            req.id = req.params.id;
            console.log('Got user id', req.id);
        }
        console.log('users-controller.all', req.method, req.url);
        next();
    };
    UsersController.prototype.index = function (req, res, next) {
        next();
    };
    UsersController.prototype.get_route = function (req, res, next) {
        if (req.params.id > (users.length - 1) || req.params.id < 0) {
            res.statusCode = 404;
            res.end('Not Found');
        }
        res.json(users[req.params.id]);
    };
    UsersController.prototype.post_route = function (req, res, next) {
        var model = new UserModel(req.body);
        model.id = users.length + 1;
        console.log('creating', model);
        users.push(model);
        res.json(model);
    };
    UsersController.prototype.put_route = function (req, res, next) {
        if (req.params.id > (users.length - 1) || req.params.id < 0) {
            res.statusCode = 404;
            res.end('No product found for that ID');
        }
        users[req.params.id] = req.body;
        res.json(req.body);
    };
    UsersController.prototype.delete_route = function (req, res, next) {
        if (!req.params.id) {
            req.status(404).json({ error: 'No user found for that ID' });
        }
        users.splice(req.param.id, 1);
        res.json(users);
    };
    return UsersController;
})();
exports.UsersController = UsersController;
//# sourceMappingURL=users-controller.js.map