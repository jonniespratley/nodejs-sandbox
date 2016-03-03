'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');

export default class App {
    instance: express;
    constructor(options) {
        options = options || {};
        this.instance = options.app || express();
        this.instance.use(bodyParser.json());
        this.instance.use(errorHandler());
        return this.instance;
    }
}
