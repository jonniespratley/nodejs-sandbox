'use strict';
import express = require('express');
import path = require('path');


/**
 * @class         AdminPlugin
 * @module        AdminPlugin
 * @constructor
 */
export default function AdminPluginRouter(app) {
    var AdminController = require('./controller').default;
    var controller = new AdminController();
    var router = new express.Router();

    router.get('/admin', controller.index);
    console.log('Router Constructor');

    app.use('/', router);

}
