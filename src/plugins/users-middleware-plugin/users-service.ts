'use strict';
import _ = require('lodash');
import path = require('path');
//const db = require('../db-plugin')('db');
const Store = require('jfs');
const UserModel = require('./user-model').default;

let users = [
    {id: 1, name: 'watch', description: 'Tell time with this amazing watch', price: 30.00},
    {id: 2, name: 'sandals', description: 'Walk in comfort with these sandals', price: 10.00}
];

/**
 * @class         Users
 * @module        Users
 * @constructor
 */
export default class UsersService {
    name:string;
    options:object;
    users:any;
    db:any;

    constructor() {
        //this.users = db.sublevel('users');
        this.db = new Store('data', {
           // type: 'single',
          //  saveId: '_id',
            pretty: true
        });
        console.log('Service Constructor');
    }

    getAsync(id) {
        return this.db.getAsync(id);
    }

    get(id:any) {
        let self = this;
        return new Promise((resolve, reject)=> {
            console.log('get', id);
            this.db.get(id, (err, resp)=> {
                console.log('get', err, resp);
                if (err) {
                    reject(err);
                }
                resolve(resp);
            });
        });
    }

    remove(id:any) {
        if(!id){
            throw new Erorr('Must provide id!');
        }
        return new Promise((resolve, reject)=> {
            console.log('remove', id);
            this.db.delete(id, (err, resp)=> {
                console.log('remove', err, resp);
                if (err) {
                    reject(err);
                }
                resolve(true);
            });
        });
    }

    save(obj:any) {
        return new Promise((resolve, reject)=> {
            console.log('save', obj);
            this.db.save(obj.id, obj, (err, resp)=> {
                console.log('save', err, resp);
                if (err) {
                    reject(err);
                }
                resolve(resp);
            });
        });
    }

    find(params:any) {
        return new Promise((resolve, reject)=> {
            console.log('find', params);
            this.db.all((err, resp)=> {
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
