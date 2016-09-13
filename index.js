'use strict';
const express = require('express');
const PORT = process.env.PORT || 5252;


const BlogPlugin = require('./src/plugins/blog-plugin');
const PassesPlugin = require('./release/js/plugins/passes').default;
//const DevicesPlugin = require('./release/js/plugins/passkit-devices').default;
const Program = require('./release/js/program').default;

let app = express();
app.use(new BlogPlugin());
/*
new Program({
	debug: true,
	  namespace: 'nodejs-sandbox',
	plugins: [
		//BlogPlugin,
		//DevicesPlugin,
	//	PassesPlugin
	],
	run: function (instance) {
		app.locals.program = instance;

		new BlogPlugin(instance);

	}
});
*/
		app.listen(PORT, function () {
			console.log('Express server started on port', PORT);
		});
