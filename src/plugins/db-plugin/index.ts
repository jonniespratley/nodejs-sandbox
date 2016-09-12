'use strict';
const _ = require('lodash');
const Store = require('jfs');
const Logger = require('../logger').default;
const assert = require('assert');
let log = null;
/**
 * @module DB
 8 @description This is a file sstem database.
 * @example
 * var db = new DB('tmp');
 */
export default class DB {
    db:any;
    constructor(dbName:string, options:object) {
      assert(dbName, 'must provide database name');
        this.db = new Store(dbName, options || {
            pretty: true
        });
        log = new Logger('db-plugin').getLogger(dbName);
        this.log = log;
        log.info('created', dbName, options);
    }

    find(params:any) {
        return new Promise((resolve, reject)=> {
            let _docs = [];
            log.info('find', params);
            this.db.all((err, resp)=> {
                if (err) {
                    log.error('find', 'error', err);
                    reject(err);
                }

                log.info('find', 'success', resp);
                _.forIn(resp, (value, key) => {
                    //log.info('find', params, value);
                    _docs.push(value);
                });
                resolve(_.filter(_docs, params));

            });
        });
    }


    get(id:string) {
      if (!id) {
        throw new Erorr('Must provide id!');
      }
        return new Promise((resolve, reject)=> {
            assert(id, 'must provide id');
            log.info('get', id);
            this.db.get(id, (err, resp)=> {
                log.info('get', 'success', resp);
                if (err) {
                  log.error('get', 'error', err);
                    reject(err);
                }
                resolve(resp);
            });
        });
    }

    remove(id:string) {
      log.info('remove', id);
        if (!id) {
          throw new Erorr('Must provide id!');
        }
        return new Promise((resolve, reject)=> {
            log.info('remove', id);
            this.db.delete(id, (err, resp)=> {
                log.info('remove', id, 'success');
                if (err) {
                    log.error('remove', 'error', err);
                    reject(err);
                }
                resolve(id);
            });
        });
    }

    put(id:string, obj:any) {
        return new Promise((resolve, reject)=> {
            log.info('put', id);
            obj.created = Date.now();
            this.db.save(id, obj, (err, resp)=> {
                log.info('put', id, 'success');
                if (err) {
                    log.error('put', 'error', err);
                    reject(err);
                }
                resolve(resp);
            });
        });
    }

    open() {
        log.info('open');
    }

    close() {
        log.info('open');
    }
}
