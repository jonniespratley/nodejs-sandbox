'use strict';
var _ = require('lodash');
const Store = require('jfs');
class UserModel {
    constructor(obj) {
        for (let prop in obj) {
            this[prop] = obj[prop];
            console.log('UserModel', prop, '=', obj[prop]);
        }
        this.id = obj.id || _.uniqueId('user-');
    }
}
exports.UserModel = UserModel;
let users = [
    { id: 1, name: 'watch', description: 'Tell time with this amazing watch', price: 30.00 },
    { id: 2, name: 'sandals', description: 'Walk in comfort with these sandals', price: 10.00 }
];
class UsersService {
    constructor() {
        this.db = new Store('data', {
            pretty: true
        });
        console.log('Service Constructor');
    }
    getAsync(id) {
        return this.db.getAsync(id);
    }
    get(id) {
        let self = this;
        return new Promise((resolve, reject) => {
            console.log('get', id);
            this.db.get(id, (err, resp) => {
                console.log('get', err, resp);
                if (err) {
                    reject(err);
                }
                resolve(resp);
            });
        });
    }
    remove(id) {
        if (!id) {
            throw new Erorr('Must provide id!');
        }
        return new Promise((resolve, reject) => {
            console.log('remove', id);
            this.db.delete(id, (err, resp) => {
                console.log('remove', err, resp);
                if (err) {
                    reject(err);
                }
                resolve(true);
            });
        });
    }
    save(obj) {
        return new Promise((resolve, reject) => {
            console.log('save', obj);
            this.db.save(obj.id, obj, (err, resp) => {
                console.log('save', err, resp);
                if (err) {
                    reject(err);
                }
                resolve(resp);
            });
        });
    }
    find(params) {
        return new Promise((resolve, reject) => {
            console.log('find', params);
            this.db.all((err, resp) => {
                if (err) {
                    reject(err);
                }
                resolve(resp);
            });
        });
    }
    static method2() {
        console.log('method2');
    }
}
exports.UsersService = UsersService;
//# sourceMappingURL=users-service.js.map