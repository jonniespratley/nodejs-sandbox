'use strict';
const _ = require('lodash');
/**
 * TODO - Describe what your model does.
 *
 * @class         {{pascalCase name}}
 * @module        {{pascalCase name}}
 * @constructor
 */
export default class Model {
	id: string;
	constructor(obj:any){

		_.forEach(obj, (prop) =>{
			this[prop] = obj[prop];
			console.log('Model', prop, '=', obj[prop]);
		});
    this.id = obj.id || _.uniqueId('user-');
	}
}
