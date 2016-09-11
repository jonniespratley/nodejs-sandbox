"use strict";
const assert = require('assert');
const express = require('express');
const request = require('supertest');
const Sandbox = require('./sandbox').default;
let instance;

describe('Sandbox',  ()=> {
    it('should be defined', (done) => {
        assert(Sandbox);
        done();
    });
});
