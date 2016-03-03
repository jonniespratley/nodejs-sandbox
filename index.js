'use strict';
const express = require('express');
const http = require('http');
const PORT = process.env.PORT || 5252;

var PassesPlugin = require('./release/js/plugins/passes').default;
//var BlogPlugin = require('./release/js/plugins/blog-plugin');
var Program = require('./release/js/program').default;
var instance = new Program({
    debug: true
});

//instance.use(PassesPlugin);
//instance.use(BlogPlugin);
var app = express();
app.set('program', instance);
new PassesPlugin(app);

app.listen(PORT, function () {
    console.log('Express server started on port', PORT);
});
