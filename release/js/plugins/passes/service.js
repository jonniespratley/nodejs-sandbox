'use strict';
var _ = require('lodash');
var path = require('path');
//const db = require('../db-plugin')('db');
var Store = require('jfs');
var Model = require('./model').default;
var Logger = require('../logger').default;
var log = new Logger('passes-plugin').getLogger('service');
/**
 * @class         PassService
 * @module        plugins/passes
 * @constructor
 */
var Service = (function () {
    function Service(db) {
        if (db) {
            this.db = db;
        }
        else {
            //this.users = db.sublevel('users');
            this.db = new Store('db-passes', {
                type: 'single',
                saveId: '_id',
                pretty: true
            });
        }
        log.info('Service Constructor');
    }
    Service.prototype.get = function (id) {
        var _this = this;
        var self = this;
        return new Promise(function (resolve, reject) {
            _this.db.get(id, function (err, resp) {
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
            log.info('remove', id);
            _this.db.delete(id, function (err, resp) {
                resp = resp || id;
                log.info('remove', 'response', resp);
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
            log.info('save', obj);
            _this.db.save(obj.id || null, obj, function (err, resp) {
                log.info('save', err, resp);
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
            log.info('find', params);
            _this.db.all(function (err, resp) {
                if (err) {
                    reject(err);
                }
                log.info('find', 'response', resp);
                _.forIn(resp, function (value, key) {
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
        log.info('method2');
    };
    return Service;
}());
exports["default"] = Service;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL3Bhc3Nlcy9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM1QixJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0IsMkNBQTJDO0FBQzNDLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM3QixJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBRXpDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDNUMsSUFBTSxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRTdEOzs7O0dBSUc7QUFDSDtJQU9JLGlCQUFZLEVBQU07UUFDbkIsRUFBRSxDQUFBLENBQUMsRUFBRSxDQUFDLENBQUEsQ0FBQztZQUNOLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2QsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1Asb0NBQW9DO1lBQ2hDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFO2dCQUM3QixJQUFJLEVBQUUsUUFBUTtnQkFDZCxNQUFNLEVBQUUsS0FBSztnQkFDYixNQUFNLEVBQUUsSUFBSTthQUNmLENBQUMsQ0FBQztRQUNSLENBQUM7UUFDRSxHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELHFCQUFHLEdBQUgsVUFBSSxFQUFNO1FBQVYsaUJBY0M7UUFiRyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFFL0IsS0FBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFVBQUMsR0FBRyxFQUFFLElBQUk7Z0JBRXRCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ2YsTUFBTSxDQUFDO3dCQUNMLEtBQUssRUFBRSxVQUFRLEVBQUUsZ0JBQWE7cUJBQy9CLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHdCQUFNLEdBQU4sVUFBTyxFQUFTO1FBQWhCLGlCQWdCQztRQWZDLEVBQUUsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUEsQ0FBQztZQUNOLE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUV0QyxDQUFDO1FBQ0MsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDL0IsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDdkIsS0FBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFVBQUMsR0FBRyxFQUFFLElBQUk7Z0JBQzNCLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO2dCQUNoQixHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3JDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ04sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQixDQUFDO2dCQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHNCQUFJLEdBQUosVUFBSyxHQUFPO1FBQVosaUJBV0M7UUFWRyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN0QixLQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLElBQUksRUFBRyxHQUFHLEVBQUUsVUFBQyxHQUFHLEVBQUUsSUFBSTtnQkFDekMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUM1QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNOLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDaEIsQ0FBQztnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQkFBSSxHQUFKLFVBQUssTUFBVTtRQUFmLGlCQXFCQztRQXBCRyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixJQUFJLEtBQUssR0FBRyxFQUFFLEVBQUUsS0FBSyxDQUFDO1lBQ3RCLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRyxFQUFFLElBQUk7Z0JBQ2xCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ04sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQixDQUFDO2dCQUNELEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDbkMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsVUFBQyxLQUFLLEVBQUUsR0FBRztvQkFDckIsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdEIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsRUFBRSxDQUFBLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQztvQkFDUixLQUFLLEdBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDbEIsQ0FBQztnQkFDRCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFbkIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxlQUFPLEdBQWQ7UUFDSSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0E5RkEsQUE4RkMsSUFBQTtBQTlGRCw0QkE4RkMsQ0FBQSIsImZpbGUiOiJwbHVnaW5zL3Bhc3Nlcy9zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
