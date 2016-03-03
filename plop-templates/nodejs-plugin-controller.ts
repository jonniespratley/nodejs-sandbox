'use strict';
const path = require('path');
const Model = require('./model.js').default;
const Service = require('./service.js').default;

/**
 * TODO - Describe what your controller does.
 *
 * @class         {{pascalCase name}}
 * @module        {{pascalCase name}}
 * @constructor
 */
export default class {{pascalCase name}}Controller {

	constructor(options:any) {

		service:Service;
		model: Model;
		collection: any;

		console.log('{{pascalCase name}}Controller Constructor');
		this.service = new Service();

	}

	use(req, res, next) {
			console.log('Time: ', Date.now());
			console.log('{{pascalCase name}}.use', req.method, req.url);
			if (req.params.id) {
					req.id = req.params.id;
					console.log('Got id', req.id);
			}
			next();
	}

	all(req, res, next) {

			console.log('-controller.all', req.method, req.url);
			next();
	}

	index(req, res, next) {
			next();
	}

	get_route(req, res, next) {
			if (req.params.id > (users.length - 1) || req.params.id < 0) {
					res.statusCode = 404;
					res.end('Not Found');
			}
			res.json(users[req.params.id]);
	}

	post_route(req, res, next) {
			var model = new Model(req.body);
			console.log('creating', model);
			this.service.save(model, (err, resp)=>{
				res.status(200).send(resp);
			});
	}

	put_route(req, res, next) {
		var model = new Model(req.body);
		console.log('creating', model);
		this.service.save(model, (err, resp)=>{
			res.status(200).send(resp);
		});
	}

	delete_route(req, res, next) {
		console.log('removing', req.id);
		this.service.remove(req.id, (err, resp)=>{
			res.status(200).send(resp);
		});
	}
}
