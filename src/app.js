'use strict';
const debug = require('debug');
const log = debug('nodejs-sandbox:app');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const PORT = 8000;


//var routes = require('./routes');



var app = module.exports = express();
app.use(bodyParser.json());
app.use(errorHandler());


http.createServer(app).listen(PORT, function () {
    log('Express server started on port', PORT);
});
