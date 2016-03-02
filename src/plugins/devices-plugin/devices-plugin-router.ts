'use strict';
import express = require('express');
import path = require('path');

/**
 * @class         DevicesPlugin
 * @module        DevicesPlugin
 * @constructor
 */
export class DevicesPluginRouter {
	name:string;
	routes:object;

	constructor() {
		console.log('Router Constructor');

	}

	method1(){
		console.log('method1');
}
