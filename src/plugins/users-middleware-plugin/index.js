'use strict';
//import UsersController = require('./users-controller');
//import UsersService = require('./users-service');
var UsersRouter = require('./users-router').default;
/**
 * @class         Users
 * @module        Users
 * @constructor
 *
 */
var Users = (function () {
    //controller: UsersController;
    function Users(app) {
        console.log('Plugin Constructor');
        // this.router = new UsersRouter(app);
        return this;
    }
    return Users;
})();
exports.Users = Users;
//# sourceMappingURL=index.js.map