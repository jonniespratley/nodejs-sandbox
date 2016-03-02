'use strict';
import {App} from '../app';
import express = require('express');

/**
 * @class         AdminPlugin
 * @module        AdminPlugin
 * @constructor
 */
export class AdminPlugin {
	name:string;
	options:object;

	constructor() {
		console.log('Plugin Constructor');
	}

}
