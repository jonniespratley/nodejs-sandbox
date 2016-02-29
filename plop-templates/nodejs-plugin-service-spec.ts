'use strict';
const assert = require('assert');
const path = require('path');
const fs = require('fs-extra');

const Service = require(path.resolve(__dirname, '{{dashCase}}-service'));
var service = null;

describe('{{dashCase name}} Service', function () {
	before(function () {
		service = new {{pascalCase name}}Service();
	});
	it('should have an instance', function () {
		assert(service);
	});
});
