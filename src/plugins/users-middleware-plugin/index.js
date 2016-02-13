'use strict';
//import UsersController = require('./users-controller');
//import UsersService = require('./users-service');
const UsersRouter = require('./users-router').default;
/**
 * @class         Users
 * @module        Users
 * @constructor
 *
 */
class Users {
    //controller: UsersController;
    constructor(app) {
        console.log('Plugin Constructor');
        // this.router = new UsersRouter(app);
        return this;
    }
}
exports.Users = Users;
