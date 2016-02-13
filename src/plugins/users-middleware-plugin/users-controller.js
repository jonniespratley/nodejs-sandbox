'use strict';
/**
 * TODO - Describe what your controller does.
 *
 * @class         Users.Model
 * @module        Users
 * @constructor
 */
class UsersController {
    constructor(options) {
        console.log('Controller Constructor');
    }
    index(req, res, next) {
    }
    all(req, res, next) {
        console.log('users-controller', req.url);
        next();
    }
    use(req, res, next) {
        conso;
    }
    get_route(req, res, next) {
    }
    post_route(req, res, next) {
    }
    put_route(req, res, next) {
    }
    delete_route(req, res, next) {
    }
}
exports.UsersController = UsersController;
