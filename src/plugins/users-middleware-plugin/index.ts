'use strict';
import express = require('express');

//import UsersController = require('./users-controller');
//import UsersService = require('./users-service');
const UsersRouter = require('./users-router').default;


/**
 * @class         Users
 * @module        Users
 * @constructor
 *
 */
export default function UsersPlugin(app) {
    console.log('Plugin Constructor');
    this.router = new UsersRouter(app);
    app.use('/', this.router);
}
