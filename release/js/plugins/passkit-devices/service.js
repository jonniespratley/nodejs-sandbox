'use strict';
var _ = require('lodash');
var path = require('path');
//const db = require('../db-plugin')('db');
var Store = require('jfs');
var Model = require('./model').default;
/**
 * @class         PasskitDevicesRouter
 * @module        plugins/PasskitDevices
 * @constructor
 */
var Service = (function () {
    function Service(db) {
        if (db) {
            this.db = db;
        }
        else {
            this.db = new Store('data', {
                pretty: true
            });
        }
        console.log('Service Constructor');
    }
    Service.prototype.get = function (id) {
        var _this = this;
        var self = this;
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
    Service.prototype.remove = function (id) {
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
    Service.prototype.save = function (obj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log('save', obj);
            _this.db.save(obj.id, obj, function (err, resp) {
                console.log('save', err, resp);
                if (err) {
                    reject(err);
                }
                resolve(resp);
            });
        });
    };
    Service.prototype.find = function (params) {
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
    return Service;
})();
exports["default"] = Service;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL3Bhc3NraXQtZGV2aWNlcy9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIlNlcnZpY2UiLCJTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiU2VydmljZS5nZXQiLCJTZXJ2aWNlLnJlbW92ZSIsIlNlcnZpY2Uuc2F2ZSIsIlNlcnZpY2UuZmluZCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsSUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzVCLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QiwyQ0FBMkM7QUFDM0MsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzdCLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFFekM7Ozs7R0FJRztBQUNIO0lBT0lBLGlCQUFZQSxFQUFNQTtRQUNkQyxFQUFFQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNMQSxJQUFJQSxDQUFDQSxFQUFFQSxHQUFHQSxFQUFFQSxDQUFDQTtRQUNqQkEsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDSkEsSUFBSUEsQ0FBQ0EsRUFBRUEsR0FBR0EsSUFBSUEsS0FBS0EsQ0FBQ0EsTUFBTUEsRUFBRUE7Z0JBQ3hCQSxNQUFNQSxFQUFFQSxJQUFJQTthQUNmQSxDQUFDQSxDQUFDQTtRQUNQQSxDQUFDQTtRQUNEQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxxQkFBcUJBLENBQUNBLENBQUNBO0lBQ3ZDQSxDQUFDQTtJQUVERCxxQkFBR0EsR0FBSEEsVUFBSUEsRUFBTUE7UUFBVkUsaUJBWUNBO1FBWEdBLElBQUlBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1FBQ2hCQSxNQUFNQSxDQUFDQSxJQUFJQSxPQUFPQSxDQUFDQSxVQUFDQSxPQUFPQSxFQUFFQSxNQUFNQTtZQUMvQkEsT0FBT0Es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RUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsVUFBQ0EsR0FBR0EsRUFBRUEsSUFBSUE7Z0JBQ2xCQSxFQUFFQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDTkEsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2hCQSxDQUFDQTtnQkFFREEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsRUFBRUEsVUFBVUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3RDQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxFQUFFQSxVQUFDQSxLQUFLQSxFQUFFQSxHQUFHQTtvQkFDckJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO29CQUNqQkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsRUFBRUEsTUFBTUEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7b0JBQ25DQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtnQkFDdEJBLENBQUNBLENBQUNBLENBQUNBO2dCQUNIQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxLQUFLQSxFQUFFQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUVyQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDUEEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDUEEsQ0FBQ0E7SUFFTEwsY0FBQ0E7QUFBREEsQ0FsRkEsQUFrRkNBLElBQUE7QUFsRkQsNEJBa0ZDLENBQUEiLCJmaWxlIjoicGx1Z2lucy9wYXNza2l0LWRldmljZXMvc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
