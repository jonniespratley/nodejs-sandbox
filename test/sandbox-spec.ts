"use strict";
const assert = require('assert');
const express = require('express');
const request = require('supertest');
const Sandbox = require('./sandbox').default;
const Plugin = require('./plugins/app-plugin');

let instance;
 
describe('Sandbox', function () {

    it('should be defined', function (done) {
        assert(Sandbox);
        done();
    });


});
