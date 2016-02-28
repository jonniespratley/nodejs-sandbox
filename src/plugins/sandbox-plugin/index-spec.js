'use strict';
const assert = require('assert');
const express = require('express');
const request = require('supertest');
const plugin = require('./');

var app = express();
plugin(app);

describe('sandbox-plugin', function() {

  it('should be defined', function() {
    assert(plugin);
  });

});
