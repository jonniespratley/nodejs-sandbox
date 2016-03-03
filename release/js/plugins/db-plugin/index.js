'use strict';
var _ = require('lodash');
var Store = require('jfs');
var Logger = require('../logger').default;
var log = null;
var DB = (function () {
    function DB(dbName) {
        this.db = new Store(dbName, {
            pretty: true
        });
        log = new Logger('db-plugin').getLogger(dbName);
    }
    DB.prototype.find = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _docs = [];
            console.log('find', params);
            _this.db.all(function (err, resp) {
                if (err) {
                    reject(err);
                }
                console.log('find', 'response', resp);
                _.forIn(resp, function (value, key) {
                    console.log(key);
                    console.log('find', params, value);
                    _docs.push(value);
                });
                resolve(_.filter(_docs, params));
            });
        });
    };
    DB.prototype.get = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log('get', id);
            _this.db.get(id, function (err, resp) {
                console.log('get', err, resp);
                if (err) {
                    reject(err);
                }
                resolve(resp);
            });
        });
    };
    DB.prototype.remove = function (id) {
        var _this = this;
        if (!id) {
            throw new Erorr('Must provide id!');
        }
        return new Promise(function (resolve, reject) {
            console.log('remove', id);
            _this.db.delete(id, function (err, resp) {
                console.log('remove', err, resp);
                if (err) {
                    reject(err);
                }
                resolve(true);
            });
        });
    };
    DB.prototype.put = function (id, obj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log('save', obj);
            _this.db.save(id, obj, function (err, resp) {
                console.log('save', err, resp);
                if (err) {
                    reject(err);
                }
                resolve(resp);
            });
        });
    };
    DB.prototype.open = function () {
        log('open');
    };
    DB.prototype.close = function () {
        log('open');
    };
    return DB;
}());
exports["default"] = DB;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL2RiLXBsdWdpbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixJQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDNUIsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzdCLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDNUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDO0FBRWY7SUFFSSxZQUFZLE1BQWE7UUFDckIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDeEIsTUFBTSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUM7UUFDSCxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxpQkFBSSxHQUFKLFVBQUssTUFBVTtRQUFmLGlCQW1CQztRQWxCRyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM1QixLQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUcsRUFBRSxJQUFJO2dCQUNsQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNOLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDaEIsQ0FBQztnQkFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3RDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFVBQUMsS0FBSyxFQUFFLEdBQUc7b0JBQ3JCLE9B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
