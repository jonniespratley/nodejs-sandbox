'use strict';
var bodyParser = require('body-parser');

module.exports = function (program) {
	var WELCOME_MESSAGE = 'Welcome to ...';
	var API_BASE = program.ConfigService.get('apiBase') + '/log';
	var router = new program.Router();
	var logger = program.logger.getLogger(API_BASE);
	logger.debug('mounted');

	var Service = program.services.locate('LogService')(program);

	router.get('/', function (req, res) {
		logger.child(req.url)
			.log(req.method, req.query);

		res.status(200).json({
			message: WELCOME_MESSAGE
		});
	});

	program.app.use(bodyParser.json({
		type: 'application/*+json'
	}));

	program.app.use(API_BASE, router);
};
