'use strict';
const assert = require('assert');
const path = require('path');
const fs = require('fs-extra');

const Service = require(path.resolve(__dirname, 'object-object-service'));
var service = null;

describe('devices-plugin Service', function () {
	before(function () {
		service = new DevicesPluginService();
	});
	it('should have an instance', function () {
		assert(service);
	});
});

