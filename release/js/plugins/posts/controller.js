'use strict';
var path = require('path');
var assert = require('assert');
var Model = require('./model').default;
var Service = require('./service').default;
var Logger = require('../logger').default;
var log = new Logger('Posts').getLogger('controller');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL3Bvc3RzL2NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQyxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ3pDLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDN0MsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUM1QyxJQUFNLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDeEQsSUFBSSxPQUFPLENBQUM7QUFFWjs7Ozs7O0dBTUc7QUFDSDtJQU1JOzs7T0FHRztJQUNILG9CQUFZLE9BQVc7UUFDbkIsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ25CLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILHdCQUFHLEdBQUgsVUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7UUFDZCxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUMsSUFBSSxFQUFFLENBQUM7SUFDWCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCx3QkFBRyxHQUFILFVBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO1FBQ2QsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLEdBQUcsQ0FBQyxFQUFF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QUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxpQ0FBWSxHQUFaLFVBQWEsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO1FBQ3ZCLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNoQyxHQUFHLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFL0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDcEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRztZQUNULEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0F0SEEsQUFzSEMsSUFBQTtBQXRIRCwrQkFzSEMsQ0FBQSIsImZpbGUiOiJwbHVnaW5zL3Bvc3RzL2NvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
