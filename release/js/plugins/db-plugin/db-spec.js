'use strict';
var async = require('async');
var assert = require('assert');
var DB = require('./').default;
var db = null;
describe('db-plugin', function () {
    this.timeout(20000);
    before(function (done) {
        db = new DB('data', { type: 'memory' });
        var createUser = function (id, callback) {
            db.put('test-doc-' + id, { name: 'test doc ' + id }).then(function (resp) {
                callback(null, resp);
            });
        };
        async.times(5, function (n, next) {
            createUser(n, function (err, user) {
                assert(user);
                next(err, user);
            });
        }, function (err, users) {
            //console.log('created', users);
            assert(users.length);
            done();
        });
    });
    after(function () {
        db.close();
    });
    it('should be defined', function () {
        assert(DB);
    });
    it('should create instance', function () {
        assert(db);
    });
    it('should thro error if no name', function () {
        assert.throws(function () {
            new DB();
        });
    });
    it('put() - should put document', function (done) {
        db.put('test-doc', { name: 'db-plugin' }).then(function (resp) {
            assert(resp);
            done();
        });
    });
    it('get() - should get document key value', function (done) {
        db.get('test-doc').then(function (resp) {
            assert(resp);
            done();
        });
    });
    it('find(params) - should return array of documents', function (done) {
        db.find({}).then(function (resp) {
            assert(resp);
            assert(resp.length);
            done();
        });
    });
    it('remove() - should remove key value', function (done) {
        db.remove('test-doc').then(function (resp) {
            assert(resp);
            done();
        }).catch(function (err) {
            assert.fail(err);
            done();
        });
    });
    it('remove() - should fail to remove unknown key', function (done) {
        db.remove('unknown-doc').then(function (resp) {
            assert.fail(resp);
            done();
        }).catch(function (err) {
            assert.ok(err);
            done();
        });
    });
    it('remove() - should thro error if no id', function () {
        assert.throws(function () {
            db.remove();
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL2RiLXBsdWdpbi9kYi1zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMvQixJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsSUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUNqQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFFZCxRQUFRLENBQUMsV0FBVyxFQUFFO0lBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEIsTUFBTSxDQUFDLFVBQVUsSUFBSTtRQUNqQixFQUFFLEdBQUcsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7UUFDdEMsSUFBSSxVQUFVLEdBQUcsVUFBVSxFQUFFLEVBQUUsUUFBUTtZQUNuQyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxFQUFFLEVBQUUsRUFBQyxJQUFJLEVBQUUsV0FBVyxHQUFHLEVBQUUsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtnQkFDbEUsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN6QixDQUFDLENBQUMsQ0FBQztRQUVQLENBQUMsQ0FBQztRQUNGLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxFQUFFLElBQUk7WUFDNUIsVUFBVSxDQUFDLENBQUMsRUFBRSxVQUFVLEdBQUcsRUFBRSxJQUFJO2dCQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2IsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUVuQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsRUFBRSxVQUFVLEdBQUcsRUFBRSxL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
