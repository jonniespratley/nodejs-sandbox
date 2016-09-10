'use strict';
var assert = require('assert');
var DIContainer = require('./').default;
var mockProgram = null;
var _program = null;
var container = null;
var testConfig = {
    username: 'test',
    password: 'test',
    host: 'localhost'
};
var ApiFactory = function (config) {
    var LocalApi = (function () {
        function LocalApi(c) {
            console.warn('LocalApi.constructor', c);
        }
        LocalApi.prototype.post = function (obj) {
            console.warn('post', obj);
        };
        LocalApi.prototype.get = function (obj) {
            console.warn('get', obj);
        };
        return LocalApi;
    }());
    return new LocalApi(config);
};
var DbService = function (config, someModule) {
    var LocalStore = (function () {
        function LocalStore(c) {
            console.warn('LocalStore.constructor', c);
        }
        LocalStore.prototype.put = function (obj) {
            console.warn('put', obj);
        };
        LocalStore.prototype.allDocs = function (o) {
            console.warn('allDocs', o);
        };
        LocalStore.prototype.remove = function (obj) {
            console.warn('save', obj);
        };
        LocalStore.prototype.get = function (id) {
            console.warn('Find by', id);
        };
        return LocalStore;
    }());
    return new LocalStore(config);
};
describe('DIContainer', function () {
    before(function () {
        container = DIContainer.module('testApp');
        container.register('config', testConfig);
    });
    it('should create instance', function (done) {
        assert(container instanceof DIContainer);
        done();
    });
    it('register(name, value) - should register module by name', function (done) {
        assert(container.register);
        container.register('someModule', {
            name: 'value'
        });
        done();
    });
    it('factory(name, obj) - should register module by name', function (done) {
        assert(container.factory);
        container.factory('Api', ApiFactory);
        done();
    });
    it('service(name, prototype) - should register service by name', function (done) {
        assert(container.service);
        container.service('Db', new DbService());
        done();
    });
    it('get(name) - should return registered module by name', function (done) {
        assert(container.get);
        assert(container.get('someModule').name === 'value');
        done();
    });
    it('get(factory) - should return instance of factory', function (done) {
        assert(container.get('Api').post);
        done();
    });
    it('get(name) - should return new instance of service', function (done) {
        assert(container.get('Db').get);
        done();
    });
    it('get(name) - should throw error if service does not exist', function (done) {
        assert.throws(function () {
            container.get('MyApi');
        }, Error);
        done();
    });
    it('inject(service) - inject dependencies into service', function (done) {
        assert(container.inject(DbService));
        done();
    });
    it('modules - should contain Map of dependencies', function (done) {
        assert(container.modules);
        assert(container.modules.get);
        assert(container.modules.set);
        assert(container.modules.has);
        assert(container.modules.keys);
        assert(container.modules.values);
        assert(container.modules instanceof Map);
        done();
    });
    it('modules.has() - should return true if module exists', function (done) {
        assert(container.modules.has('Api') === true);
        assert(container.modules.has('Unknown') === false);
        done();
    });
    it('modules.keys() - should return all module keys', function (done) {
        var keys = container.modules.keys();
        console.log(keys);
        assert(keys);
        done();
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL2RpLWNvbnRhaW5lci9kaS1jb250YWluZXItc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUMxQyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDdkIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQztBQUNyQixJQUFJLFVBQVUsR0FBRztJQUNmLFFBQVEsRUFBRSxNQUFNO0lBQ2hCLFFBQVEsRUFBRSxNQUFNO0lBQ2hCLElBQUksRUFBRSxXQUFXO0NBQ2xCLENBQUM7QUFDRixJQUFNLFVBQVUsR0FBRyxVQUFTLE1BQU07SUFDaEM7UUFDRSxrQkFBWSxDQUFDO1lBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBRUQsdUJBQUksR0FBSixVQUFLLEdBQUc7WUFDTixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1QixDQUFDO1FBRUQsc0JBQUcsR0FBSCxVQUFJLEdBQUc7WUFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMzQixDQUFDO1FBQ0gsZUFBQztJQUFELENBWkEsQUFZQyxJQUFBO0lBQ0QsTUFBTSxDQUFDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzlCLENBQUMsQ0FBQztBQUNGLElBQU0sU0FBUyxHQUFHLFVBQVMsTUFBTSxFQUFFLFVBQVU7SUFDM0M7UUFDRSxvQkFBWSxDQUFDO1lBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QyxD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QUFDLE1BQU0sQ0FBQztZQUNaLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekIsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ1YsSUFBSSxFQUFFLENBQUM7SUFDVCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxvREFBb0QsRUFBRSxVQUFTLElBQUk7UUFDcEUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNwQyxJQUFJLEVBQUUsQ0FBQztJQUNULENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDhDQUE4QyxFQUFFLFVBQVMsSUFBSTtRQUM5RCxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLElBQUksRUFBRSxDQUFDO0lBQ1QsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMscURBQXFELEVBQUUsVUFBUyxJQUFJO1FBQ3JFLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUM5QyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUM7UUFDbkQsSUFBSSxFQUFFLENBQUM7SUFDVCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxnREFBZ0QsRUFBRSxVQUFTLElBQUk7UUFDaEUsSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNiLElBQUksRUFBRSxDQUFDO0lBQ1QsQ0FBQyxDQUFDLENBQUM7QUFFTCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJwbHVnaW5zL2RpLWNvbnRhaW5lci9kaS1jb250YWluZXItc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
