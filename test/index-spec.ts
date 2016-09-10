"use strict";
const assert = require('assert');
const express = require('express');
const request = require('supertest');
const nodeSandbox = require('./index');
let instance;

describe('nodejs-sandbox',  ()=> {
    it('should be defined', (done) => {
        assert(nodeSandbox);
        done();
    });
    it('Program = should be defined', (done) => {
        assert(nodeSandbox.Program);
        done();
    });
    it('DB = should be defined', (done) => {
        assert(nodeSandbox.DB);
        done();
    });
    it('App = should be defined', (done) => {
        assert(nodeSandbox.App);
        done();
    });
    it('Sandbox = should be defined', (done) => {
        assert(nodeSandbox.Sandbox);
        done();
    });
    it('ServiceLocator = should be defined', (done) => {
        assert(nodeSandbox.ServiceLocator);
        done();
    });
});
