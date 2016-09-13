'use strict';
const debug = require('debug');
const npmlog = require('npmlog');
var instance;
/**
 * @class         Logger
 * @module        Logger
 */
export default class Logger {

    constructor(namespace:string){
      this.namespace = namespace;
      instance = npmlog;
    }


    getLogger(category) {
      console.warn('GetLogger', category);
      instance.heading = category;
      this.getDebugger(category);
      return this;
    }


    getDebugger(category) {
      this.log = debug(`${this.namespace}:${category}`);
      this.log.log = console.log.bind(console);
      return this;
    }

    log(){
      this.log(arguments);
      return this;
    }
    info(){
      this.log(arguments);
      return this;
    }

}
