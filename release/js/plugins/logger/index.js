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
        this.instance = npmlog;
        this.instance.heading = name;
    }
    Logger.prototype.getLogger = function (category) {
        //return debug(`${this.namespace}:${category}`);
        return this.instance;
    };
    Logger.prototype.getDebugger = function (category) {
        return debug(this.namespace + ":" + category);
    };
    return Logger;
}());
exports.__esModule = true;
exports["default"] = Logger;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL2xvZ2dlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0IsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDOzs7R0FHRztBQUNIO0lBQ0ksZ0JBQVksSUFBVztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDakMsQ0FBQztJQUNELDBCQUFTLEdBQVQsVUFBVSxRQUFRO1FBQ2QsZ0RBQWdEO1FBQ2hELE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFDRCw0QkFBVyxHQUFYLFVBQVksUUFBUTtRQUNoQixNQUFNLENBQUMsS0FBSyxDQUFJLElBQUksQ0FBQyxTQUFTLFNBQUksUUFBVSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVMLGFBQUM7QUFBRCxDQWRBLEFBY0MsSUFBQTtBQWREOzJCQWNDLENBQUEiLCJmaWxlIjoicGx1Z2lucy9sb2dnZXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
