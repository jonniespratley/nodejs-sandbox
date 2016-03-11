'use strict';
var path = require('path');
var assert = require('assert');
var Model = require('./model').default;
var PostsService = require('./service').default;
var Logger = require('../logger').default;
var log = new Logger('Posts').getLogger('controller');
var service;
/**
 * TODO - Describe what your controller does.
 *
 * @class
 * @module        Posts
 * @constructor
 */
var PostsController = (function () {
    /**
     *
     * @param options
     */
    function PostsController(options) {
        log('Constructor');
        service = new PostsService();
    }
    /**
     *
     * @param req
     * @param res
     * @param next
     */
    PostsController.prototype.use = function (req, res, next) {
        log('use', req.method, req.url, req.params);
        next();
    };
    /**
     *
     * @param req
     * @param res
     * @param next
     */
    PostsController.prototype.all = function (req, res, next) {
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
    PostsController.prototype.index = function (req, res, next) {
        next();
    };
    PostsController.prototype.get_route = function (req, res, next) {
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
    PostsController.prototype.post_route = function (req, res, next) {
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
    PostsController.prototype.put_route = function (req, res, next) {
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
    PostsController.prototype.delete_route = function (req, res, next) {
        assert(req.params.id, 'has id');
        log('removing', req.params.id);
        service.remove(req.params.id).then(function (resp) {
            res.status(200).send(resp);
        }).catch(function (err) {
            res.status(404).send(err);
        });
    };
    return PostsController;
}());
exports["default"] = PostsController;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL3Bvc3RzL2NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQyxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ3pDLElBQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDbEQsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUM1QyxJQUFNLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDeEQsSUFBSSxPQUFPLENBQUM7QUFFWjs7Ozs7O0dBTUc7QUFDSDtJQU1JOzs7T0FHRztJQUNILHlCQUFZLE9BQVc7UUFDbkIsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ25CLE9BQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILDZCQUFHLEdBQUgsVUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7UUFDZCxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUMsSUFBSSxFQUFFLENBQUM7SUFDWCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCw2QkFBRyxHQUFILFVBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO1FBQ2QsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7UUFDRCxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLElBQUksRUFBRSxDQUFDO0lBQ1gsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsK0JBQUssR0FBTCxVQUFNLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSTtRQUNoQixJQUFJLEVBQUUsQ0FBQztJQUNYLENBQUM7SUFHRCxtQ0FBUyxHQUFULFVBQVUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO1FBQ3BCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTtnQkFDakMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRztnQkFDVCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7Z0JBQy9CLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUc7Z0JBQ1QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsb0NBQVUsR0FBVixVQUFXLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSTtRQUNyQixJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVuQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDdEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRztZQUNULEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsbUNBQVMsR0FBVCxVQUFVLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSTtRQUN0QixFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFDaEIsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDOUIsQ0FBQztRQUNELElBQUksS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxHQUFHLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTtZQUM5QixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7Z0JBQzFCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUc7Z0JBQ1QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO1lBQ1QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxzQ0FBWSxHQUFaLFVBQWEsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO1FBQ3ZCLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNoQyxHQUFHLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFL0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDcEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRztZQUNULEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0E1SEEsQUE0SEMsSUFBQTtBQTVIRCxvQ0E0SEMsQ0FBQSIsImZpbGUiOiJwbHVnaW5zL3Bvc3RzL2NvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
