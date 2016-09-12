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
        this.db = new Store('db-passes', {
            type: 'single',
            saveId: '_id',
            pretty: true
        });
			}
      log.info('Service Constructor');
    }

    get(id:any) {
        let self = this;
        return new Promise((resolve, reject)=> {

            this.db.get(id, (err, resp)=> {

                if (err || !resp) {
                    reject({
                      error: `Pass ${id} not found!`
                    });
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
            log.info('remove', id);
            this.db.delete(id, (err, resp)=> {
              resp = resp || id;
                log.info('remove', 'response', resp);
                if (err) {
                    reject(err);
                }
                resolve(true);
            });
        });
    }

    save(obj:any) {
        return new Promise((resolve, reject)=> {
            log.info('save', obj);
            this.db.save(obj.id || null,  obj, (err, resp)=> {
                log.info('save', err, resp);
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
            log.info('find', params);
            this.db.all((err, resp)=> {
                if (err) {
                    reject(err);
                }
                log.info('find', 'response', resp);
                _.forIn(resp, (value, key) => {
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
        log.info('method2');
    }
}
