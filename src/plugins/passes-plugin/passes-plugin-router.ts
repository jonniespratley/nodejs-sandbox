'use strict';
import express = require('express');
import path = require('path');

/**
 * @class         PassesPlugin
 * @module        PassesPlugin
 * @constructor
 */
export class PassesPluginRouter {
	name:string;
	routes:object;

	constructor() {
		console.log('Router Constructor');

	}

	method1(){
		console.log('method1');
	}
}
