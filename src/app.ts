'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');

/**
 * @class App
 * @description This is the express application instance for the program.
 */
export default class App {
    instance:express;

    constructor(options:any) {
        options = options || {};

        this.instance = options.app || express();
        this.instance.use(bodyParser.json());
        this.instance.use(errorHandler());
        return this.instance;
    }
}
