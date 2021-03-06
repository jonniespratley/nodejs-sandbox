"use strict";
var assert = require('assert');
var express = require('express');
var request = require('supertest');
var nodeSandbox = require('./index');
var instance;
describe('nodejs-sandbox', function () {
    it('should be defined', function (done) {
        assert(nodeSandbox);
        done();
    });
    it('Program = should be defined', function (done) {
        assert(nodeSandbox.Program);
        done();
    });
    it('DB = should be defined', function (done) {
        assert(nodeSandbox.DB);
        done();
    });
    it('App = should be defined', function (done) {
        assert(nodeSandbox.App);
        done();
    });
    it('Sandbox = should be defined', function (done) {
        assert(nodeSandbox.Sandbox);
        done();
    });
    it('ServiceLocator = should be defined', function (done) {
        assert(nodeSandbox.ServiceLocator);
        done();
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvaW5kZXgtc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ25DLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNyQyxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdkMsSUFBSSxRQUFRLENBQUM7QUFFYixRQUFRLENBQUMsZ0JBQWdCLEVBQUc7SUFDeEIsRUFBRSxDQUFDLG1CQUFtQixFQUFFLFVBQUMsSUFBSTtRQUN6QixNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEIsSUFBSSxFQUFFLENBQUM7SUFDWCxDQUFDLENBQUMsQ0FBQztJQUNILEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSxVQUFDLElBQUk7UUFDbkMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixJQUFJLEVBQUUsQ0FBQztJQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ0gsRUFBRSxDQUFDLHdCQUF3QixFQUFFLFVBQUMsSUFBSTtRQUM5QixNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksRUFBRSxDQUFDO0lBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDSCxFQUFFLENBQUMseUJBQXlCLEVBQUUsVUFBQyxJQUFJO1FBQy9CLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxFQUFFLENBQUM7SUFDWCxDQUFDLENBQUMsQ0FBQztJQUNILEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSxVQUFDLElBQUk7UUFDbkMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixJQUFJLEVBQUUsQ0FBQztJQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ0gsRUFBRSxDQUFDLG9DQUFvQyxFQUFFLFVBQUMsSUFBSTtRQUMxQyxNQUFNLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ25DLElBQUksRUFBRSxDQUFDO0lBQ1gsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJpbmRleC1zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
