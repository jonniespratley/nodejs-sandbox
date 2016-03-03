'use strict';
const _ = require('lodash');
const path = require('path');
//const db = require('../db-plugin')('db');
const Store = require('jfs');
const Model = require('./model').default;


/**
 * @class         Users
 * @module        Users
 * @constructor
 */
export default class Service {
    name:string;
    options:object;
    models:any;
    model:any;
    db:any;

    constructor(db:any) {
			if(db){
				this.db = db;
			} else {
				//this.users = db.sublevel('users');
        this.db = new Store('data', {
           // type: 'single',
          //  saveId: '_id',
            pretty: true
        });
			}
      console.log('Service Constructor');
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
            let _docs = [];
            console.log('find', params);
            this.db.all((err, resp)=> {
                if (err) {
                    reject(err);
                }

                console.log('find', 'response', resp);
                _.forIn(resp, (value, key) => {
                    console.log(key);
                    console.log('find', params, value);
                    _docs.push(value);
                });
                resolve(_.filter(_docs, params));

            });
        });
    }


    static method2() {
        console.log('method2');
    }
}
