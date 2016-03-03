'use strict';
const _ = require('lodash');
const Store = require('jfs');
const Logger = require('../logger').default;
let log = null;

export default class DB {
    db:any;
    constructor(dbName:string) {
        this.db = new Store(dbName, {
            pretty: true
        });
        log = new Logger('db-plugin').getLogger(dbName);
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


    get(id:string) {
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

    remove(id:string) {
        if (!id) {
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

    put(id:string, obj:any) {
        return new Promise((resolve, reject)=> {
            console.log('save', obj);
            this.db.save(id, obj, (err, resp)=> {
                console.log('save', err, resp);
                if (err) {
                    reject(err);
                }
                resolve(resp);
            });
        });
    }

    open() {
        log('open');
    }

    close() {
        log('open');
    }
}
