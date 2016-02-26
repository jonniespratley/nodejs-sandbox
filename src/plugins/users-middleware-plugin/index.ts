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
export class Users {
    name:string;
    options:object;
    //  service: UsersService;
    router:UsersRouter;
    //controller: UsersController;

    constructor(app:express) {
        console.log('Plugin Constructor');
        // this.router = new UsersRouter(app);
        return this;
    }

}
