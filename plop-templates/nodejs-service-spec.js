'use strict';
var assert = require('assert'),
	path = require('path'),
	fs = require('fs-extra'),
	service = null,
	program = require(path.resolve(__dirname, '../../helpers/mockProgram'))();


describe('{{pascalCase name}} Service', function () {
	before(function () {
		program.register('{{pascalCase name}}Service', require(path.resolve(__dirname, '../../../build/script/services/{{name}}-service')));
		service = program.get('{{pascalCase name}}Service');
	});

	it('should have an instance', function () {
		assert(service);
	});

});
