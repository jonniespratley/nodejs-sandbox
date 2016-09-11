'use strict';
const debug = require('debug');
const npmlog = require('npmlog');
/**
 * @class         Logger
 * @module        Logger
 */
export default class Logger {
    constructor(name:string){
        this.namespace = name;
        console.log('Logger instance');
        this.instance = npmlog;
        this.instance.heading = name;
    }
    getLogger(category) {
        //return debug(`${this.namespace}:${category}`);
        return this.instance;
    }

}
