'use strict';
const UsersRouter = require('./users-router').default;
class Users {
    constructor(app) {
        console.log('Plugin Constructor');
        return this;
    }
}
exports.Users = Users;
//# sourceMappingURL=index.js.map