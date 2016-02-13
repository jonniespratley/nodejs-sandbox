'use strict';
/**
 * @class         Users
 * @module        Users
 * @constructor
 */
class UsersService {
    constructor() {
        console.log('Service Constructor');
    }
    method1() {
        console.log('method1');
    }
    static method2() {
        console.log('method2');
    }
}
exports.UsersService = UsersService;
