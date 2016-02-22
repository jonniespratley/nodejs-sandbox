'use strict';

import { BaseService } from './base-service';

/**
 *
 * @class         {{pascalCase name}}
 * @module        {{pascalCase name}}
 * @constructor
 */
class {{pascalCase name}}Service{
	constructor(options){
		super('{{pascalCase name}}', options);
		this.logger('BootService.constructor');

	}
	init() {
		this.logger('init')
	}

	destroy() {
		this.logger('destroy')
	}

	start() {
		this.logger('Start')
	}

	stop() {
		this.logger('stop')
	}
}

module.exports = function(){
	return new {{pascalCase name}}Service();
};
