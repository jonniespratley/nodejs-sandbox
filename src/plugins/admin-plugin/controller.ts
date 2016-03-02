'use strict';
import path = require('path');
/**
 * TODO - Describe what your controller does.
 *
 * @class         AdminPlugin.Model
 * @module        AdminPlugin
 * @constructor
 */
export default class AdminPluginController {
	constructor(options) {
		console.log('Controller Constructor');
	}

	index(req, res, next) {
		res.status(200).json({
			message: 'admin plugin index route'
		});
	}

	use(req, res, next) {

	}

	get_route(req, res, next) {

	}

	post_route(req, res, next) {

	}

	put_route(req, res, next) {

	}

	delete_route(req, res, next) {

	}
}
