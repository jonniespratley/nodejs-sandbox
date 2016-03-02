'use strict';
import {App} from '../app';
import express = require('express');

/**
 * @class         DevicesPlugin
 * @module        DevicesPlugin
 * @constructor
 */
export class DevicesPlugin {
	name:string;
	options:object;

	constructor() {
		console.log('Plugin Constructor');
	}

}

