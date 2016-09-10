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
                if (err || !resp) {
                    reject({
                        error: "Pass " + id + " not found!"
                    });
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
                    _docs.push(value);
                });
                if (params) {
                    //params.doctype = 'device';
                    log('find', 'filter', params);
                    resolve(_.filter(_docs, params));
                }
                else {
                    resolve(_docs);
                }
            });
        });
    };
    Service.method2 = function () {
        log('method2');
    };
    return Service;
}());
exports["default"] = Service;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL3Bvc3RzL3NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsSUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzVCLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QiwyQ0FBMkM7QUFDM0MsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzdCLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFFekMsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUM1QyxJQUFNLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFN0Q7Ozs7R0FJRztBQUNIO0lBT0ksaUJBQVksRUFBTTtRQUNkLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDTCxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNqQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixvQ0FBb0M7WUFDcEMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7Z0JBQ3hCLGlCQUFpQjtnQkFDakIsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsTUFBTSxFQUFFLElBQUk7YUFDZixDQUFDLENBQUM7UUFDUCxDQUFDO1FBQ0QsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELHFCQUFHLEdBQUgsVUFBSSxFQUFNO1FBQVYsaUJBY0M7UUFiRyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDL0IsR0FBRyxDQUFDLEtBQUss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QyxDQUFDO2dCQUN0QixDQUFDLENBQUMsQ0FBQztnQkFDSCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNULDRCQUE0QjtvQkFDNUIsR0FBRyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBRTlCLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbkIsQ0FBQztZQUdMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sZUFBTyxHQUFkO1FBQ0ksR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FqR0EsQUFpR0MsSUFBQTtBQWpHRCw0QkFpR0MsQ0FBQSIsImZpbGUiOiJwbHVnaW5zL3Bvc3RzL3NlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
