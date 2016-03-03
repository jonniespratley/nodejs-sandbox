'use strict';
var _ = require('lodash');
var path = require('path');
//const db = require('../db-plugin')('db');
var Store = require('jfs');
var Model = require('./model').default;
var Logger = require('../logger').default;
var log = new Logger('passes-plugin').getLogger('service');
/**
 * @class         Users
 * @module        Users
 * @constructor
 */
var Service = (function () {
    function Service(db) {
        if (db) {
            this.db = db;
        }
        else {
            //this.users = db.sublevel('users');
            this.db = new Store('data', {
                //type: 'single',
                saveId: '_id',
                pretty: true
            });
        }
        log('Service Constructor');
    }
    Service.prototype.get = function (id) {
        var _this = this;
        var self = this;
        return new Promise(function (resolve, reject) {
            log('get', id);
            _this.db.get(id, function (err, resp) {
                log('get', err, resp);
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
            throw new Error('Must provide id!');
        }
        return new Promise(function (resolve, reject) {
            log('remove', id);
            _this.db.delete(id, function (err, resp) {
                resp = resp || id;
                log('remove', 'response', resp);
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
            log('save', obj);
            _this.db.save(obj.id || null, obj, function (err, resp) {
                log('save', err, resp);
                if (err) {
                    reject(err);
                }
                resolve(obj);
            });
        });
    };
    Service.prototype.find = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _docs = [], _resp;
            log('find', params);
            _this.db.all(function (err, resp) {
                if (err) {
                    reject(err);
                }
                log('find', 'response', resp);
                _.forIn(resp, function (value, key) {
                    log(key);
                    log('find', params, value);
                    _docs.push(value);
                });
                if (params) {
                    _resp = _.filter(_docs, params);
                }
                else {
                    _resp = _docs;
                }
                resolve(_docs);
            });
        });
    };
    Service.method2 = function () {
        log('method2');
    };
    return Service;
}());
exports["default"] = Service;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL3Bhc3Nlcy9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM1QixJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0IsMkNBQTJDO0FBQzNDLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM3QixJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBRXpDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDNUMsSUFBTSxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRTdEOzs7O0dBSUc7QUFDSDtJQU9JLGlCQUFZLEVBQU07UUFDbkIsRUFBRSxDQUFBLENBQUMsRUFBRSxDQUFDLENBQUEsQ0FBQztZQUNOLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2QsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1Asb0NBQW9DO1lBQ2hDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUN4QixpQkFBaUI7Z0JBQ2pCLE1BQU0sRUFBRSxLQUFLO2dCQUNiLE1BQU0sRUFBRSxJQUFJO2FBQ2YsQ0FBQyxDQUFDO1FBQ1IsQ0FBQztRQUNFLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxxQkFBRyxHQUFILFVBQUksRUFBTTtRQUFWLGlCQVlDO1FBWEcsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLEdBQUcsQ0FBQyxLQUFL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O29CQUMzQixLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN0QixDQUFDLENBQUMsQ0FBQztnQkFDSCxFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDO29CQUNSLEtBQUssR0FBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNsQixDQUFDO2dCQUNELE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVuQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLGVBQU8sR0FBZDtRQUNJLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBQ0wsY0FBQztBQUFELENBL0ZBLEFBK0ZDLElBQUE7QUEvRkQsNEJBK0ZDLENBQUEiLCJmaWxlIjoicGx1Z2lucy9wYXNzZXMvc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
