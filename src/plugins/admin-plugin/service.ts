'use strict';
import path = require('path');

/**
 * @class         AdminPlugin
 * @module        AdminPlugin
 * @constructor
 */
export default class AdminPluginService {
	name:string;
	options:object;

	constructor() {
		console.log('Service Constructor');
	}

	method1(){
		console.log('method1');
	}

	static method2(){
		console.log('method2');
	}
}
