'use strict';
const debug = require('debug');

export default class Logger {

    static getLogger(category) {
        return debug(`${namespace}:${category}`);
    }

}
