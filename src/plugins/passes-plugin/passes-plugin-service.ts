'use strict';
import path = require('path');

/**
 * @class         PassesPlugin
 * @module        PassesPlugin
 * @constructor
 */
export class PassesPluginService {
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
