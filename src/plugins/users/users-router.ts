'use strict';
import express = require('express');
import path = require('path');
import bodyParser = require('body-parser');
/**
 * @class         Users
 * @module        Users
 * @constructor
 */
export default function routes() {

    var app = new express.Router();


    console.log('Router Constructor');
    var users = [
        {id: 0, name: 'watch', description: 'Tell time with this amazing watch', price: 30.00},
        {id: 1, name: 'sandals', description: 'Walk in comfort with these sandals', price: 10.00},
        {id: 2, name: 'sunglasses', description: 'Protect your eyes in style', price: 25.00}
    ];

    app.use(bodyParser.json());
    

// curl -X GET http://localhost:3000/users
    app.get('/users', function (req, res) {
        res.json(users);
    });
// curl -X GET http://localhost:3000/users/2
    app.get('/users/:id', function (req, res) {
        if (req.params.id > (users.length - 1) || req.params.id < 0) {
            res.statusCode = 404;
            res.end('Not Found');
        }
        res.json(users[req.params.id]);
    });
// curl -X POST -d "name=flops&description=sandals&price=12.00" http://localhost:3000/users
    app.post('/users', bodyParser.json(), function (req, res) {
        console.log(req.body);
        if (typeof req.body.name === 'undefined') {
            res.statusCode = 400;
            res.end('a product name is required');
        }
        users.push(req.body);
        res.send(req.body);
    });
// curl -X PUT -d "name=flipflops&description=sandals&price=12.00" http://localhost:3000/users/3
    app.put('/users/:id', bodyParser.json(), function (req, res) {
        if (req.params.id > (users.length - 1) || req.params.id < 0) {
            res.statusCode = 404;
            res.end('No product found for that ID');
        }
        users[req.params.id] = req.body;
        res.send(req.body);
    });
// curl -X DELETE http://localhost:3000/users/2
    app.delete('/users/:id', function (req, res) {
        if (req.params.id > (users.length - 1) || req.params.id < 0) {
            req.statusCode = 404;
            res.end('No product found for that ID');
        }
        users.splice(req.params.id, 1);
        res.json(users);
    });


    return app;

}
