'use strict';
import {App} from '../app';
import express = require('express');

/**
 * @class         PassesPlugin
 * @module        PassesPlugin
 * @constructor
 */
export class PassesPlugin {
	name:string;
	options:object;

	constructor() {
		console.log('Plugin Constructor');
	}

}
