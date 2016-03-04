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
                    // params.doctype = 'device';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL2RldmljZXMvc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixJQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDNUIsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLDJDQUEyQztBQUMzQyxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDN0IsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUV6QyxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQzVDLElBQU0sR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUU3RDs7OztHQUlHO0FBQ0g7SUFPSSxpQkFBWSxFQUFNO1FBQ2QsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNMLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLG9DQUFvQztZQUNwQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDeEIsaUJBQWlCO2dCQUNqQixNQUFNLEVBQUUsS0FBSztnQkFDYixNQUFNLEVBQUUsSUFBSTthQUNmLENBQUMsQ0FBQztRQUNQLENBQUM7UUFDRCxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQscUJBQUcsR0FBSCxVQUFJLEVBQU07UUFBVixpQkFjQztRQWJHLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsS0FBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFVBQUMsR0FBRyxFQUFFLElBQUk7Z0JBQ3RCLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN0QixFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNmLE1BQU0sQ0FBQzt3QkFDSCxLQUFLLEVBQUUsVUFBUSxFQUFFLGdCQUFhO3FCQUNqQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx3QkFBTSxHQUFOLFVBQU8sRUFBUztRQUFoQixpQkFnQkM7UUFmRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDTixNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFeEMsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbEIsS0FBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFVBQUMsR0FBRyxFQUFFLElBQUk7Z0JBQ3pCLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO2dCQUNsQixHQUFHLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDaEMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDTixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLENBQUM7Z0JBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsc0JBQUksR0FBSixVQUFLLEdBQU87UUFBWixpQkFXQztRQVZHLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDakIsS0FBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxJQUFJLEVBQUUsR0FBRyxFQUFFLFVBQUMsR0FBRyxFQUFFLElBQUk7Z0JBQ3hDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN2QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNOLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDaEIsQ0FBQztnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQkFBSSxHQUFKLFVBQUssTUFBVTtRQUFmLGlCQXlCQztRQXhCRyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixJQUFJLEtBQUssR0FBRyxFQUFFLEVBQUUsS0FBSyxDQUFDO1lBQ3RCLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDcEIsS0FBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHLEVBQUUsSUFBSTtnQkFDbEIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDTixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLENBQUM7Z0JBQ0QsR0FBRyxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBRTlCLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFVBQUMsS0FBSyxFQUFFLEdBQUc7b0JBQ3JCLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3RCLENBQUMsQ0FBQyxDQUFDO2dCQUNILEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ1YsNkJBQTZCO29CQUM1QixHQUFHLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFFOUIsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuQixDQUFDO1lBR0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxlQUFPLEdBQWQ7UUFDSSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQWxHQSxBQWtHQyxJQUFBO0FBbEdELDRCQWtHQyxDQUFBIiwiZmlsZSI6InBsdWdpbnMvZGV2aWNlcy9zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
