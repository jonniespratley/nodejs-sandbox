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
export default class Router {

    Controller:Controller;
    Model:Model;
    Router:Router;
    Service:Service;

    /**
     * @constructor
     * @param app
     */
    constructor(app:express) {

        console.log('Router Constructor');
        //this.Router = new Router(app);
        //app.use(this);
        //app.use('/', new Router(app));
    }
}
