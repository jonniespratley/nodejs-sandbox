'use strict';
const _ = require('lodash');
const path = require('path');
//const db = require('../db-plugin')('db');
const Store = require('jfs');
const Model = require('./model').default;

const Logger = require('../logger').default;
const log = new Logger('passes-plugin').getLogger('service');

/**
 * @class         PassService
 * @module        plugins/passes
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
            //type: 'single',
            saveId: '_id',
            pretty: true
        });
			}
      log('Service Constructor');
    }

    get(id:any) {
        let self = this;
        return new Promise((resolve, reject)=> {
            log('get', id);
            this.db.get(id, (err, resp)=> {
                log('get', err, resp);
                if (err) {
                    reject(err);
                }
                resolve(resp);
            });
        });
    }

    remove(id:string) {
      if(!id){
        throw new Error('Must provide id!');
        //reject('Must provide an id!');
      }
        return new Promise((resolve, reject)=> {
            log('remove', id);
            this.db.delete(id, (err, resp)=> {
              resp = resp || id;
                log('remove', 'response', resp);
                if (err) {
                    reject(err);
                }
                resolve(true);
            });
        });
    }

    save(obj:any) {
        return new Promise((resolve, reject)=> {
            log('save', obj);
            this.db.save(obj.id || null,  obj, (err, resp)=> {
                log('save', err, resp);
                if (err) {
                    reject(err);
                }
                resolve(obj);
            });
        });
    }

    find(params:any) {
        return new Promise((resolve, reject)=> {
            let _docs = [], _resp;
            log('find', params);
            this.db.all((err, resp)=> {
                if (err) {
                    reject(err);
                }

                log('find', 'response', resp);
                _.forIn(resp, (value, key) => {
                    log(key);
                    log('find', params, value);
                    _docs.push(value);
                });
                if(params){
                   _resp =  _.filter(_docs, params);
                } else {
                    _resp = _docs;
                }
                resolve(_docs);

            });
        });
    }

    static method2() {
        log('method2');
    }
}
