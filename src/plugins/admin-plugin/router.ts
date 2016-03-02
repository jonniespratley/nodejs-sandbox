'use strict';
import express = require('express');
import path = require('path');

/**
 * @class         AdminPlugin
 * @module        AdminPlugin
 * @constructor
 */
export class AdminPluginRouter {
	name:string;
	routes:object;

	constructor() {
		console.log('Router Constructor');

	}

	method1(){
		console.log('method1');
	}
}
