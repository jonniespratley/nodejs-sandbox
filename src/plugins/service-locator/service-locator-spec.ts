'use strict';
const assert = require('assert');
const express = require('express');
const request = require('supertest');
const ServiceLocator = require('./').default;
let mockService = {
    name: 'test'
};
describe('Service Locator', ()=>{
    it('should be defined', (done)=>{
        assert(ServiceLocator);
        done();
    });

    it('should have register method', (done)=>{
        assert(ServiceLocator.register);
        done();
    });

    it('should register service', (done)=>{
        ServiceLocator.register('mockService', mockService);
        assert(ServiceLocator.get('mockService') === mockService);
        done();
    });


    it('should register factory', (done)=>{
        ServiceLocator.factory('mockService', mockService);
        assert(ServiceLocator.get('mockService') === mockService);
        done();
    });

    it('should return registered service', (done)=>{
        assert(ServiceLocator.get('mockService').name === 'test');
        done();
    });
    it('get - should throw error if unknown', ()=>{
      assert.throws(()=>{
        ServiceLocator.get('unkown');
      });
    });
});
