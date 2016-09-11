'use strict';
const Controller = require('./controller').default;
const Model = require('./model').default;
const Router = require('./router').default;
const Service = require('./service').default;
const express = require('express');
/**
 * @class         PassesPlugin
 * @module        Passes
 *
 * @example
 * app = express();
 * instance = new Plugin(app);
 */
export default class Passes {

    Controller:Controller;
    Model:Model;
    Router:Router;
    Service:Service;

    /**
     * @constructor
     * @param app
     */
    constructor(app:express) {
        this.Router = new Router(app);
        console.log('Plugin Constructor');

    }
}
