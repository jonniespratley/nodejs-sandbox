'use strict';
var path = require('path');
var assert = require('assert');
var Model = require('./model').default;
var PasskitDevicesService = require('./service').default;
var Logger = require('../logger').default;
var log = new Logger('PasskitDevices').getLogger('controller');
var service;
/**
 * @class         PasskitDevicesController
 * @module        plugins/PasskitDevices
 * @constructor
 */
var PasskitDevicesController = (function () {
    /**
     *
     * @param options
     */
    function PasskitDevicesController(options) {
        log('Constructor');
        service = new PasskitDevicesService();
    }
    /**
     *
     * @param req
     * @param res
     * @param next
     */
    PasskitDevicesController.prototype.use = function (req, res, next) {
        log('use', req.method, req.url, req.params);
        next();
    };
    /**
     *
     * @param req
     * @param res
     * @param next
     */
    PasskitDevicesController.prototype.all = function (req, res, next) {
        if (req.params.id) {
            req.id = req.params.id;
            console.log('Got id', req.id);
        }
        log('all', req.method, req.url);
        next();
    };
    /**
     *
     * @param req
     * @param res
     * @param next
     */
    PasskitDevicesController.prototype.index = function (req, res, next) {
        next();
    };
    PasskitDevicesController.prototype.get_route = function (req, res, next) {
        if (req.params.id) {
            service.get(req.params.id).then(function (resp) {
                res.status(200).send(resp);
            }).catch(function (err) {
                res.status(404).send(err);
            });
        }
        else {
            service.find(req.params).then(function (resp) {
                res.status(200).send(resp);
            }).catch(function (err) {
                res.status(404).send(err);
            });
        }
    };
    /**
     *
     * @param req
     * @param res
     * @param next
     */
    PasskitDevicesController.prototype.post_route = function (req, res, next) {
        var m = new Model(req.body);
        log('creating', m);
        service.save(m).then(function (resp) {
            res.status(201).send(resp);
        }).catch(function (err) {
            res.status(404).send(err);
        });
    };
    /**
     *
     * @param req
     * @param res
     * @param next
     */
    PasskitDevicesController.prototype.put_route = function (req, res, next) {
        if (req.params.id) {
            req.body.id = req.params.id;
        }
        var model = new Model(req.body);
        log('updating', req.params.id);
        service.get(model.id).then(function (resp) {
            service.save(model).then(function (resp) {
                res.status(200).send(resp);
            }).catch(function (err) {
                res.status(404).send(err);
            });
        }).catch(function (err) {
            res.status(404).send(err);
        });
    };
    /**
     *
     * @param req
     * @param res
     * @param next
     */
    PasskitDevicesController.prototype.delete_route = function (req, res, next) {
        assert(req.params.id, 'has id');
        log('removing', req.params.id);
        service.remove(req.params.id).then(function (resp) {
            res.status(200).send(resp);
        }).catch(function (err) {
            res.status(404).send(err);
        });
    };
    return PasskitDevicesController;
})();
exports["default"] = PasskitDevicesController;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL3Bhc3NraXQtZGV2aWNlcy9jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbIlBhc3NraXREZXZpY2VzQ29udHJvbGxlciIsIlBhc3NraXREZXZpY2VzQ29udHJvbGxlci5jb25zdHJ1Y3RvciIsIlBhc3NraXREZXZpY2VzQ29udHJvbGxlci51c2UiLCJQYXNza2l0RGV2aWNlc0NvbnRyb2xsZXIuYWxsIiwiUGFzc2tpdERldmljZXNDb250cm9sbGVyLmluZGV4IiwiUGFzc2tpdERldmljZXNDb250cm9sbGVyLmdldF9yb3V0ZSIsIlBhc3NraXREZXZpY2VzQ29udHJvbGxlci5wb3N0X3JvdXRlIiwiUGFzc2tpdERldmljZXNDb250cm9sbGVyLnB1dF9yb3V0ZSIsIlBhc3NraXREZXZpY2VzQ29udHJvbGxlci5kZWxldGVfcm91dGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QixJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUN6QyxJQUFNLHFCQUFxQixHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDM0QsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUM1QyxJQUFNLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNqRSxJQUFJLE9BQU8sQ0FBQztBQUVaOzs7O0dBSUc7QUFDSDtJQU1JQTs7O09BR0dBO0lBQ0hBLGtDQUFZQSxPQUFXQTtRQUNuQkMsR0FBR0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0E7UUFDbkJBLE9BQU9BLEdBQUdBLElBQUlBLHFCQUFxQkEsRUFBRUEsQ0FBQ0E7SUFDMUNBLENBQUNBO0lBRUREOzs7OztPQUtHQTtJQUNIQSxzQ0FBR0EsR0FBSEEsVUFBSUEsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsSUFBSUE7UUFDZEUsR0FBR0EsQ0FBQ0EsS0FBS0EsRUFBRUEsR0FBR0EsQ0FBQ0EsTUFBTUEsRUFBRUEsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7UUFDNUNBLElBQUlBLEVBQUVBLENBQUNBO0lBQ1hBLENBQUNBO0lBRURGOzs7OztPQUtHQTtJQUNIQSxzQ0FBR0EsR0FBSEEsVUFBSUEsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsSUFBSUE7UUFDZEcsRUFBRUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDaEJBLEdBQUdBLENBQUNBLEVBQUVBLEdBQUdBLEdBQUdBLENBQUNBLE1BQU1BLENBQUNBLEVBQUVBLENBQUNBO1lBQ3ZCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxRQUFRQSxFQUFFQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtRQUNsQ0EsQ0FBQ0E7UUFDREEsR0FBR0EsQ0FBQ0EsS0FBS0EsRUFBRUEsR0FBR0EsQ0FBQ0EsTUFBTUEsRUFBRUEsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDaENBLElBQUlBLEVBQUVBLENBQUNBO0lBQ1hBLENBQUNBO0lBRURIOzs7OztPQUtHQTtJQUNIQSx3Q0FBS0EsR0FBTEEsVUFBTUEsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsSUFBSUE7UUFDaEJJLElBQUlBLEVBQUVBLENBQUNBO0lBQ1hBLENBQUNBO0lBR0RKLDRDQUFTQSxHQUFUQSxVQUFVQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxJQUFJQTtRQUNwQkssRUFBRUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDaEJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLE1BQU1BLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFVBQUNBLElBQUlBO2dCQUNqQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDL0JBLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLFVBQUNBLEdBQUdBO2dCQUNUQSxHQUFHQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUM5QkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDUEEsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDSkEsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBQ0EsSUFBSUE7Z0JBQy9CQSxHQUFHQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUMvQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsVUFBQ0EsR0FBR0E7Z0JBQ1RBLEdBQUdBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQzlCQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNQQSxDQUFDQTtJQUNMQSxDQUFDQTtJQUVETDs7Ozs7T0FLR0E7SUFDSEEsNkNBQVVBLEdBQVZBLFVBQVdBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLElBQUlBO1FBQ3JCTSxJQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUM1QkEsR0FBR0EsQ0FBQ0EsVUFBVUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFFbkJB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
