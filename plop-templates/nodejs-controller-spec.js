'use strict';
var assert = require('assert'),
	path = require('path'),
	fs = require('fs-extra'),
	controller = null,
	program = require(path.resolve(__dirname, '../../helpers/mockProgram'))();


describe('Controllers', function () {

	describe('{{pascalCase name}} Controller', function () {
		before(function () {
			controller = program.get('{{pascalCase name}}Controller');
		});

		it('should have an instance', function () {
			assert(controller);
		});

	});

});
