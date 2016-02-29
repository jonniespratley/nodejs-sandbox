'use strict';
var _ = require('lodash');
//const db = require('../db-plugin')('db');
var Store = require('jfs');
var UserModel = (function () {
    function UserModel(obj) {
        for (var prop in obj) {
            this[prop] = obj[prop];
            console.log('UserModel', prop, '=', obj[prop]);
        }
        this.id = obj.id || _.uniqueId('user-');
    }
    return UserModel;
})();
exports.UserModel = UserModel;
var users = [
    { id: 1, name: 'watch', description: 'Tell time with this amazing watch', price: 30.00 },
    { id: 2, name: 'sandals', description: 'Walk in comfort with these sandals', price: 10.00 }
];
/**
 * @class         Users
 * @module        Users
 * @constructor
 */
var UsersService = (function () {
    function UsersService() {
        //this.users = db.sublevel('users');
        this.db = new Store('data', {
            // type: 'single',
            //  saveId: '_id',
            pretty: true
        });
        console.log('Service Constructor');
    }
    UsersService.prototype.getAsync = function (id) {
        return this.db.getAsync(id);
    };
    UsersService.prototype.get = function (id) {
        var _this = this;
        var self = this;
        return new Promise(function (resolve, reject) {
            console.log('get', id);
            _this.db.get(id, function (err, resp) {
                console.log('get', err, resp);
                if (err) {
                    reject(err);
                }
                resolve(resp);
            });
        });
    };
    UsersService.prototype.remove = function (id) {
        var _this = this;
        if (!id) {
            throw new Erorr('Must provide id!');
        }
        return new Promise(function (resolve, reject) {
            console.log('remove', id);
            _this.db.delete(id, function (err, resp) {
                console.log('remove', err, resp);
                if (err) {
                    reject(err);
                }
                resolve(true);
            });
        });
    };
    UsersService.prototype.save = function (obj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log('save', obj);
            _this.db.save(obj.id, obj, function (err, resp) {
                console.log('save', err, resp);
                if (err) {
                    reject(err);
                }
                resolve(resp);
            });
        });
    };
    UsersService.prototype.find = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log('find', params);
            _this.db.all(function (err, resp) {
                if (err) {
                    reject(err);
                }
                resolve(resp);
            });
        });
    };
    UsersService.method2 = function () {
        console.log('method2');
    };
    return UsersService;
})();
exports.UsersService = UsersService;
//# sourceMappingURL=users-service.js.map