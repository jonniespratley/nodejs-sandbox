'use strict';
var path = require('path');
var assert = require('assert');
var Model = require('./model').default;
var Service = require('./service').default;
/**
 *
 * @class           PassesController
 * @description     This controller handles the routes from the router.
 * @module        plugins/passes
 * @constructor
 */
var service;
var PassesController = (function () {
    function PassesController(options) {
        console.log('PassesController Constructor');
        service = new Service();
    }
    PassesController.prototype.use = function (req, res, next) {
        console.log('Passes.use', req.method, req.url, req.params);
        next();
    };
    PassesController.prototype.all = function (req, res, next) {
        if (req.params.id) {
            req.id = req.params.id;
            console.log('Got id', req.id);
        }
        console.log('PassesController-controller.all', req.method, req.url);
        next();
    };
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
    PassesController.prototype.post_route = function (req, res, next) {
        var m = new Model(req.body);
        console.log('creating', m);
        service.save(m).then(function (resp) {
            res.status(201).send(resp);
        }).catch(function (err) {
            res.status(404).send(err);
        });
    };
    PassesController.prototype.put_route = function (req, res, next) {
        var model = new Model(req.body);
        console.log('updating', req.params.id);
        service.save(model).then(function (resp) {
            res.status(200).send(resp);
        }).catch(function (err) {
            res.status(404).send(err);
        });
    };
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
})();
exports["default"] = PassesController;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL3Bhc3Nlcy9jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbIlBhc3Nlc0NvbnRyb2xsZXIiLCJQYXNzZXNDb250cm9sbGVyLmNvbnN0cnVjdG9yIiwiUGFzc2VzQ29udHJvbGxlci51c2UiLCJQYXNzZXNDb250cm9sbGVyLmFsbCIsIlBhc3Nlc0NvbnRyb2xsZXIuaW5kZXgiLCJQYXNzZXNDb250cm9sbGVyLmdldF9yb3V0ZSIsIlBhc3Nlc0NvbnRyb2xsZXIucG9zdF9yb3V0ZSIsIlBhc3Nlc0NvbnRyb2xsZXIucHV0X3JvdXRlIiwiUGFzc2VzQ29udHJvbGxlci5kZWxldGVfcm91dGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QixJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUN6QyxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBRTdDOzs7Ozs7R0FNRztBQUNILElBQUksT0FBTyxDQUFDO0FBQ1o7SUFNSUEsMEJBQVlBLE9BQVdBO1FBQ25CQyxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSw4QkFBOEJBLENBQUNBLENBQUNBO1FBQzVDQSxPQUFPQSxHQUFHQSxJQUFJQSxPQUFPQSxFQUFFQSxDQUFDQTtJQUM1QkEsQ0FBQ0E7SUFFREQsOEJBQUdBLEdBQUhBLFVBQUlBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLElBQUlBO1FBQ2RFLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLFlBQVlBLEVBQUVBLEdBQUdBLENBQUNBLE1BQU1BLEVBQUVBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLEdBQUdBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1FBQzNEQSxJQUFJQSxFQUFFQSxDQUFDQTtJQUNYQSxDQUFDQTtJQUVERiw4QkFBR0EsR0FBSEEsVUFBSUEsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsSUFBSUE7UUFDZEcsRUFBRUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDaEJBLEdBQUdBLENBQUNBLEVBQUVBLEdBQUdBLEdBQUdBLENBQUNBLE1BQU1BLENBQUNBLEVBQUVBLENBQUNBO1lBQ3ZCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxRQUFRQSxFQUFFQSxHQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtRQUNsQ0EsQ0FBQ0E7UUFDREEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsaUNBQWlDQSxFQUFFQSxHQUFHQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUNwRUEsSUFBSUEsRUFBRUEsQ0FBQ0E7SUFDWEEsQ0FBQ0E7SUFFREgsZ0NBQUtBLEdBQUxBLFVBQU1BLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLElBQUlBO1FBQ2hCSSxJQUFJQSxFQUFFQSxDQUFDQTtJQUNYQSxDQUFDQTtJQUVESixvQ0FBU0EsR0FBVEEsVUFBVUEsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsSUFBSUE7UUFDcEJLLEVBQUVBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO1lBQ1RBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFVBQUNBLElBQUlBO2dCQUMxQkEsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDL0JBLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLFVBQUNBLEdBQUdBO2dCQUNUQSxHQUFHQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUM5QkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDUEEsQ0FBQ0E7UUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDSkEsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBQ0EsSUFBSUE7Z0JBQy9CQSxHQUFHQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUMvQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsVUFBQ0EsR0FBR0E7Z0JBQ1RBLEdBQUdBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQzlCQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNQQSxDQUFDQTtJQUNMQSxDQUFDQTtJQUVETCxxQ0FBVUEsR0FBVkEsVUFBV0EsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsSUFBSUE7UUFDckJNLElBQUlBLENBQUNBLEdBQUdBLElBQUlBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQzVCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxVQUFVQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUUzQkEsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBQ0EsSUFBSUE7WUFDdEJBLEdBQUdBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQy9CQSxDQUFDQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxVQUFDQSxHQUFHQTtZQUNUQSxHQUFHQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUM5QkEsQ0FBQ0EsQ0FBQ0EsQ0FBQUE7SUFDTkEsQ0FBQ0E7SUFFRE4sb0NBQVNBLEdBQVRBLFVBQVVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLElBQUlBO1FBQ3BCTyxJQUFJQSxLQUFLQSxHQUFHQSxJQUFJQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUNoQ0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsVUFBVUEsRUFBRUEsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7UUFFdkNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFVBQUNBLElBQUlBO1lBQzFCQSxHQUFHQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUMvQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsVUFBQ0EsR0FBR0E7WUFDVEEsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDOUJBLENBQUNBLENBQUNBLENBQUNBO0lBQ1BBLENBQUNBO0lBRURQLHVDQUFZQSxHQUFaQSxVQUFhQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxJQUFJQTtRQUN2QlEsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsRUFBRUEsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0E7UUFDaENBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLFVBQVVBLEVBQUVBLEdBQUdBLENBQUNBLE1BQU1BLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO1FBRXZDQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxNQUFNQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFDQSxJQUFJQTtZQUNwQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDL0JBLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLFVBQUNBLEdBQUdBO1lBQ1RBLEdBQUdBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQzlCQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNQQSxDQUFDQTtJQUNMUix1QkFBQ0E7QUFBREEsQ0E3RUEsQUE2RUNBLElBQUE7QUE3RUQscUNBNkVDLENBQUEiLCJmaWxlIjoicGx1Z2lucy9wYXNzZXMvY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
