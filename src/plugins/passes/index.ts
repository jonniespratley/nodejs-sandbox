'use strict';
const Controller = require('./controller').default;
const Model = require('./model').default;
const Router = require('./router').default;
const Service = require('./service').default;
const express = require('express');

/**
 * This is the Passes Plugin
 * @module        Passes
 * @constructor
 */
export default class Passes {
    name:string;
    options:object;
    Controller:Controller;
    Model:Model;
    Router:Router;
    Service:Service;

    /**
     * Initialize the app
     * @constructor
     * @param app
     */
    constructor(app:express) {
        this.Router = new Router(app);
        console.log('Plugin Constructor');

    }

}
