'use strict';
var path = require('path');
var assert = require('assert');
var Model = require('./model').default;
var Service = require('./service').default;
var Logger = require('../logger').default;
var log = new Logger('Devices').getLogger('controller');
var service;
/**
 * TODO - Describe what your controller does.
 *
 * @class         Passes
 * @module        Passes
 * @constructor
 */
var Controller = (function () {
    /**
     *
     * @param options
     */
    function Controller(options) {
        log('Constructor');
        service = new Service();
    }
    /**
     *
     * @param req
     * @param res
     * @param next
     */
    Controller.prototype.use = function (req, res, next) {
        log('use', req.method, req.url, req.params);
        next();
    };
    /**
     *
     * @param req
     * @param res
     * @param next
     */
    Controller.prototype.all = function (req, res, next) {
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
    Controller.prototype.index = function (req, res, next) {
        next();
    };
    Controller.prototype.get_route = function (req, res, next) {
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
    Controller.prototype.post_route = function (req, res, next) {
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
    Controller.prototype.put_route = function (req, res, next) {
        var model = new Model(req.body);
        log('updating', req.params.id);
        service.save(model).then(function (resp) {
            res.status(200).send(resp);
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
    Controller.prototype.delete_route = function (req, res, next) {
        assert(req.params.id, 'has id');
        log('removing', req.params.id);
        service.remove(req.params.id).then(function (resp) {
            res.status(200).send(resp);
        }).catch(function (err) {
            res.status(404).send(err);
        });
    };
    return Controller;
}());
exports["default"] = Controller;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL2RldmljZXMvY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0IsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDekMsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUM3QyxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQzVDLElBQU0sR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUMxRCxJQUFJLE9BQU8sQ0FBQztBQUVaOzs7Ozs7R0FNRztBQUNIO0lBTUk7OztPQUdHO0lBQ0gsb0JBQVksT0FBVztRQUNuQixHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbkIsT0FBTyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsd0JBQUcsR0FBSCxVQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSTtRQUNkLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxJQUFJLEVBQUUsQ0FBQztJQUNYLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILHdCQUFHLEdBQUgsVUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7UUFDZCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEIsR0FBRyxDQUFDLEVB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LEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILGlDQUFZLEdBQVosVUFBYSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7UUFDdkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUUvQixPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTtZQUNwQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO1lBQ1QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQXZIQSxBQXVIQyxJQUFBO0FBdkhELCtCQXVIQyxDQUFBIiwiZmlsZSI6InBsdWdpbnMvZGV2aWNlcy9jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
