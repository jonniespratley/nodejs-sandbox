'use strict';
const Controller = require('./controller').default;
const Model = require('./model').default;
const Router = require('./router').default;
const Service = require('./service').default;

/**
 * @class         Passes
 * @module        Passes
 * @constructor
 */
export default class {{pascalCase name}} {
	name:string;
	options:object;
	Controller:Controller;
	Model:Model;
	Router:Router;
	Service:Service;

	constructor(app:any) {
		this.Router = new Router(app);
		console.log('{{pascalCase name}} Plugin Constructor');

	}

}
