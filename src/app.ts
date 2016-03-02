'use strict';
const debug = require('debug');
const log = debug('nodejs-sandbox:app');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');

//var routes = require('./routes');
export default class App {
    constructor(options) {
        log('constructor', options);

        this.instance = express();
        this.instance.use(bodyParser.json());
        this.instance.use(errorHandler());
        return this.instance;
    }
}
