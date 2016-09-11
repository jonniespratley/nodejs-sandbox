'use strict';
var assert = require('assert');
var express = require('express');
var request = require('supertest');
var ServiceLocator = require('./').default;
var mockService = {
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
    it('should register factory', function (done) {
        ServiceLocator.factory('mockService', mockService);
        assert(ServiceLocator.get('mockService') === mockService);
        done();
    });
    it('should return registered service', function (done) {
        assert(ServiceLocator.get('mockService').name === 'test');
        done();
    });
    it('get - should throw error if unknown', function () {
        assert.throws(function () {
            ServiceLocator.get('unkown');
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL3NlcnZpY2UtbG9jYXRvci9zZXJ2aWNlLWxvY2F0b3Itc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ25DLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNyQyxJQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQzdDLElBQUksV0FBVyxHQUFHO0lBQ2QsSUFBSSxFQUFFLE1BQU07Q0FDZixDQUFDO0FBQ0YsUUFBUSxDQUFDLGlCQUFpQixFQUFFO0lBQ3hCLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxVQUFDLElBQUk7UUFDekIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksRUFBRSxDQUFDO0lBQ1gsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNkJBQTZCLEVBQUUsVUFBQyxJQUFJO1FBQ25DLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEMsSUFBSSxFQUFFLENBQUM7SUFDWCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxVQUFDLElBQUk7UUFDL0IsY0FBYyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDcEQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssV0FBVyxDQUFDLENBQUM7UUFDMUQsSUFBSSxFQUFFLENBQUM7SUFDWCxDQUFDLENBQUMsQ0FBQztJQUdILEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxVQUFDLElBQUk7UUFDL0IsY0FBYyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssV0FBVyxDQUFDLENBQUM7UUFDMUQsSUFBSSxFQUFFLENBQUM7SUFDWCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRSxVQUFDLElBQUk7UUFDeEMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxDQUFDO1FBQzFELElBQUksRUFBRSxDQUFDO0lBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDSCxFQUFFLENBQUMscUNBQXFDLEVBQUU7UUFDeEMsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNaLGNBQWMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InBsdWdpbnMvc2VydmljZS1sb2NhdG9yL3NlcnZpY2UtbG9jYXRvci1zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
