'use strict';
const express = require('express');
const PORT = process.env.PORT || 5252;


//const BlogPlugin = require('./release/js/plugins/blog-plugin').default;
const PassesPlugin = require('./release/js/plugins/passes').default;
const DevicesPlugin = require('./release/js/plugins/passkit-devices').default;
const Program = require('./release/js/program').default;

let app = express();

let instance = new Program({
	debug: true,
	plugins: [
		DevicesPlugin,
		PassesPlugin
	],
	run: function () {
		app.set('program', instance);
		app.listen(PORT, function () {
			console.log('Express server started on port', PORT);
		});
	}
});


