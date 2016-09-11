'use strict';
var debug = require('debug');
var npmlog = require('npmlog');
/**
 * @class         Logger
 * @module        Logger
 */
var Logger = (function () {
    function Logger(name) {
        this.namespace = name;
        console.log('Logger instance');
        this.instance = npmlog;
        this.instance.heading = name;
    }
    Logger.prototype.getLogger = function (category) {
        //return debug(`${this.namespace}:${category}`);
        return this.instance;
    };
    return Logger;
}());
exports["default"] = Logger;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL2xvZ2dlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0IsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDOzs7R0FHRztBQUNIO0lBQ0ksZ0JBQVksSUFBVztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFDRCwwQkFBUyxHQUFULFVBQVUsUUFBUTtRQUNkLGdEQUFnRDtRQUNoRCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRUwsYUFBQztBQUFELENBWkEsQUFZQyxJQUFBO0FBWkQsMkJBWUMsQ0FBQSIsImZpbGUiOiJwbHVnaW5zL2xvZ2dlci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
