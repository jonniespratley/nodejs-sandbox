'use strict';
var path = require('path');
var assert = require('assert');
var Model = require('./model').default;
var Service = require('./service').default;
var service;
/**
 * TODO - Describe what your controller does.
 *
 * @class         Passes
 * @module        Passes
 * @constructor
 */
var PassesController = (function () {
    /**
     *
     * @param options
     */
    function PassesController(options) {
        console.log('PassesController Constructor');
        service = new Service();
    }
    /**
     *
     * @param req
     * @param res
     * @param next
     */
    PassesController.prototype.use = function (req, res, next) {
        console.log('Passes.use', req.method, req.url, req.params);
        next();
    };
    /**
     *
     * @param req
     * @param res
     * @param next
     */
    PassesController.prototype.all = function (req, res, next) {
        if (req.params.id) {
            req.id = req.params.id;
            console.log('Got id', req.id);
        }
        console.log('PassesController-controller.all', req.method, req.url);
        next();
    };
    /**
     *
     * @param req
     * @param res
     * @param next
     */
    PassesController.prototype.index = function (req, res, next) {
        next();
    };
    PassesController.prototype.get_route = function (req, res, next) {
        if (req.id) {
            service.get(req.id).then(function (resp) {
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
    PassesController.prototype.post_route = function (req, res, next) {
        var m = new Model(req.body);
        console.log('creating', m);
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
    PassesController.prototype.put_route = function (req, res, next) {
        var model = new Model(req.body);
        console.log('updating', req.params.id);
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
    PassesController.prototype.delete_route = function (req, res, next) {
        assert(req.params.id, 'has id');
        console.log('removing', req.params.id);
        service.remove(req.params.id).then(function (resp) {
            res.status(200).send(resp);
        }).catch(function (err) {
            res.status(404).send(err);
        });
    };
    return PassesController;
}());
exports["default"] = PassesController;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL3Bhc3Nlcy9jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QixJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUN6QyxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQzdDLElBQUksT0FBTyxDQUFDO0FBRVo7Ozs7OztHQU1HO0FBQ0g7SUFNSTs7O09BR0c7SUFDSCwwQkFBWSxPQUFXO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUM1QyxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCw4QkFBRyxHQUFILFVBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzRCxJQUFJLEVBQUUsQ0FBQztJQUNYLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILDhCQUFHLEdBQUgsVUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7UUFDZCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEIsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEMsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEUsSUFBSSxFQUFFLENBQUM7SUFDWCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxnQ0FBSyxHQUFMLFVBQU0sR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO1FBQ2hCLElBQUksRUFBRSxDQUFDO0lBQ1gsQ0FBQztJQUVELG9DQUFTLEdBQVQsVUFBVSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7UUFDcEIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJO2dCQUMxQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO2dCQUNULEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTtnQkFDL0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRztnQkFDVCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxxQ0FBVSxHQUFWLFVBQVcsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO1FBQ3JCLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUUzQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDdEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRztZQUNULEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsb0NBQVMsR0FBVCxVQUFVLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSTtRQUNwQixJQUFJLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV2QyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDMUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRztZQUNULEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsdUNBQVksR0FBWixVQUFhLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSTtRQUN2QixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV2QyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTtZQUNwQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO1lBQ1QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQXJIQSxBQXFIQyxJQUFBO0FBckhELHFDQXFIQyxDQUFBIiwiZmlsZSI6InBsdWdpbnMvcGFzc2VzL2NvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
