'use strict';
const debug = require('debug');

export default class Logger {
    constructor(namespace:string){
        this.namespace = namespace;
    }
    getLogger(category) {
        return debug(`${this.namespace}:${category}`);
    }

}
