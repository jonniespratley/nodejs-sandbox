'use strict';
const assert = require('assert');
const express = require('express');
const request = require('supertest');
const ServiceLocator = require('./').default;
let mockService = {
    name: 'test'
};
describe('Service Locator', function () {
    it('should be defined', function (done) {
        assert(ServiceLocator);
        done();
    });

    it('should have register method', function (done) {
        assert(ServiceLocator.register);
        done();
    });

    it('should register service', function (done) {
        ServiceLocator.register('mockService', mockService);
        assert(ServiceLocator.get('mockService') === mockService);
        done();
    });

    it('should return registered service', function (done) {
        assert(ServiceLocator.get('mockService').name === 'test');
        done();
    });
});
