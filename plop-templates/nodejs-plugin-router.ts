'use strict';
import express = require('express');
import path = require('path');

/**
 * @class         {{pascalCase name}}
 * @module        {{pascalCase name}}
 * @constructor
 */
export class {{pascalCase name}}Router {
	name:string;
	routes:object;

	constructor() {
		console.log('Router Constructor');

	}

	method1(){
		console.log('method1');
	}
}
