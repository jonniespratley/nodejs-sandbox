'use strict';
import path = require('path');

/**
 * @class         {{pascalCase name}}
 * @module        {{pascalCase name}}
 * @constructor
 */
export class {{pascalCase name}}Service {
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
