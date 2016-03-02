'use strict';
const debug = require('debug');
const log = debug('nodejs-sandbox:app');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
class App {
    constructor(options) {
        log('constructor', options);
        this.instance = express();
        this.instance.use(bodyParser.json());
        this.instance.use(errorHandler());
        return this.instance;
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map