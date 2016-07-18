'use strict';
const _ = require('lodash');
/**
 * @class         {{pascalCase name}}Model
 * @module        plugins/{{pascalCase name}}
 * @constructor
 */
export default class  {{pascalCase name}}Model {
	id: string;
	constructor(obj:any) {
		_.assign(this, obj);
		this.id = obj.id || _.uniqueId('model-');
	}
}
