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
    })();
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
    })();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL2RpLWNvbnRhaW5lci9kaS1jb250YWluZXItc3BlYy50cyJdLCJuYW1lcyI6WyJMb2NhbEFwaSIsIkxvY2FsQXBpLmNvbnN0cnVjdG9yIiwiTG9jYWxBcGkucG9zdCIsIkxvY2FsQXBpLmdldCIsIkxvY2FsU3RvcmUiLCJMb2NhbFN0b3JlLmNvbnN0cnVjdG9yIiwiTG9jYWxTdG9yZS5wdXQiLCJMb2NhbFN0b3JlLmFsbERvY3MiLCJMb2NhbFN0b3JlLnJlbW92ZSIsIkxvY2FsU3RvcmUuZ2V0Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUMxQyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDdkIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQztBQUNyQixJQUFJLFVBQVUsR0FBRztJQUNmLFFBQVEsRUFBRSxNQUFNO0lBQ2hCLFFBQVEsRUFBRSxNQUFNO0lBQ2hCLElBQUksRUFBRSxXQUFXO0NBQ2xCLENBQUM7QUFDRixJQUFNLFVBQVUsR0FBRyxVQUFTLE1BQU07SUFDaEM7UUFDRUEsa0JBQVlBLENBQUNBO1lBQ1hDLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLHNCQUFzQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDMUNBLENBQUNBO1FBRURELHVCQUFJQSxHQUFKQSxVQUFLQSxHQUFHQTtZQUNORSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUM1QkEsQ0FBQ0E7UUFFREYsc0JBQUdBLEdBQUhBLFVBQUlBLEdBQUdBO1lBQ0xHLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO1FBQzNCQSxDQUFDQTtRQUNISCxlQUFDQTtJQUFEQSxDQVpBLEFBWUNBLElBQUE7SUFDRCxNQUFNLENBQUMsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFDO0FBQ0YsSUFBTSxTQUFTLEdBQUcsVUFBUyxNQUFNLEVBQUUsVUFBVTtJQUMzQztRQUNFSSxvQkFBWUEsQ0FBQ0E7WUFDWEMsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0Esd0JBQXdCQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUM1Q0EsQ0FBQ0E7UUFFREQsd0JBQUdBLEdBQUhBLFVBQUlBLEdBQUdBO1lBQ0xFLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO1FBQzNCQSxDQUFDQTtRQUVERiw0QkFBT0EsR0FBUEEsVUFBUUEsQ0FBQ0E7WUFDUEcsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDN0JBLENBQUNBO1FBRURILDJCQUFNQSxHQUFOQSxVQUFPQSxHQUFHQTtZQUNSSSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUM1QkEsQ0FBQ0E7UUFFREosd0JBQUdBLEdBQUhBLFVBQUlBLEVBQUVBO1lBQ0pLLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBO1FBQzlCQSxDQUFDQTtRQUNITCxpQkFBQ0E7SUFBREEsQ0FwQkEsQUFvQkNBLElBQUE7SUFDRCxNQUFNLENBQUMsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDaEMsQ0FBQyxDQUFDO0FBRUYsUUFBUSxDQUFDLGFBQWEsRUFBRTtJQUN0QixNQUFNLENBQUM7UUFDTCxTQUFTLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMzQyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxVQUFTLElBQUk7UUFDeEMsTUFBTSxDQUFDLFNBQVMsWUFBWSxXQUFXLENBQUMsQ0FBQztRQUN6QyxJQUFJLEVBQUUsQ0FBQztJQUNULENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHdEQUF3RCxFQUFFLFVBQVMsSUFBSTtRQUN4RSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNCLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFO1lBQy9CLElBQUksRUFBRSxPQUFPO1NBQ2QsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxFQUFFLENBQUM7SUFDVCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxxREFBcUQsRUFBRSxVQUFTLElBQUk7UUFDckUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQixTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNyQyxJQUFJLEVBQUUsQ0FBQztJQUNULENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDREQUE0RCxFQUFFLFVBQVMsSUFBSTtRQUM1RSxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFCLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksU0FBUyxFQUFFLENBQUMsQ0FBQztRQUN6QyxJQUFJLEVBQUUsQ0FBQztJQUNULENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHFEQUFxRCxFQUFFLFVBQVMsSUFBSTtRQUNyRSxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsQ0FBQztRQUNyRCxJQUFJLEVBQUUsQ0FBQztJQUNULENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGtEQUFrRCxFQUFFLFVBQVMsSUFBSTtRQUNsRSxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLEVBQUUsQ0FBQztJQUNULENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG1EQUFtRCxFQUFFLFVBQVMsSUFBSTtRQUNuRSxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxJQUFJLEVBQUUsQ0FBQztJQUNULENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDBEQUEwRCxFQUFFLFVBQVMsSUFBSTtRQUMxRSxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ1osU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDVixJQUFJLEVBQUUsQ0FBQztJQUNULENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG9EQUFvRCxFQUFFLFVBQVMsSUFBSTtRQUNwRSxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksRUFBRSxDQUFDO0lBQ1QsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsOENBQThDLEVBQUUsVUFBUyxJQUFJO1FBQzlELE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDekMsSUFBSSxFQUFFLENBQUM7SUFDVCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxxREFBcUQsRUFBRSxVQUFTLElBQUk7UUFDckUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQztRQUNuRCxJQUFJLEVBQUUsQ0FBQztJQUNULENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGdEQUFnRCxFQUFFLFVBQVMsSUFBSTtRQUNoRSxJQUFJLElBQUksR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2IsSUFBSSxFQUFFLENBQUM7SUFDVCxDQUFDLENBQUMsQ0FBQztBQUVMLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InBsdWdpbnMvZGktY29udGFpbmVyL2RpLWNvbnRhaW5lci1zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
