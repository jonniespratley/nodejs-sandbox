'use strict';
var Controller = require('./controller').default;
var Model = require('./model').default;
var Router = require('./router').default;
var Service = require('./service').default;
var express = require('express');
/**
 * @class         PassesPlugin
 * @module        plugins/passes
 *
 * @example
 * app = express();
 * instance = new Plugin(app);
 */
var Passes = (function () {
    /**
     * @constructor
     * @param app
     */
    function Passes(app) {
        this.Router = new Router(app);
        console.log('Plugin Constructor');
    }
    return Passes;
}());
exports["default"] = Passes;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL3Bhc3Nlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ25ELElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDekMsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUMzQyxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQzdDLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNuQzs7Ozs7OztHQU9HO0FBQ0g7SUFPSTs7O09BR0c7SUFDSCxnQkFBWSxHQUFXO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBRXRDLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtBQWhCRCwyQkFnQkMsQ0FBQSIsImZpbGUiOiJwbHVnaW5zL3Bhc3Nlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
