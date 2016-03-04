'use strict';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const  {{pascalCase name}}Controller = require('./controller').default;
/**
 * @class         {{pascalCase name}}Router
 * @module        plugins/{{pascalCase name}}
 * @constructor
 */
export default class {{pascalCase name}}Router {

  constructor(app:express) {
    console.log(' {{pascalCase name}}Router Constructor');

    const controller = new  {{pascalCase name}}Controller();
    const router = new express.Router();

    router.use(controller.use);
    router.use(bodyParser.json());

    router.route('{{route}}?')
        .all(controller.all)
        .get(controller.get_route)
        .post(bodyParser.json(), controller.post_route);

    router.route('{{route}}/:id?')
        .all(controller.all)
        .get(controller.get_route)
        .put(bodyParser.json(), controller.put_route)
        .delete(controller.delete_route);

    app.use('/', router);
  }
}
