'use strict';
var debug = require('debug');
var npmlog = require('npmlog');
var instance;
/**
 * @class         Logger
 * @module        Logger
 */
var Logger = (function () {
    function Logger(namespace) {
        this.namespace = namespace;
        instance = npmlog;
    }
    Logger.prototype.getLogger = function (category) {
        console.warn('GetLogger', category);
        instance.heading = category;
        this.getDebugger(category);
        return this;
    };
    Logger.prototype.getDebugger = function (category) {
        this.log = debug(this.namespace + ":" + category);
        this.log.log = console.log.bind(console);
        return this;
    };
    Logger.prototype.log = function () {
        this.log(arguments);
        return this;
    };
    Logger.prototype.info = function () {
        this.log(arguments);
        return this;
    };
    return Logger;
}());
exports["default"] = Logger;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL2xvZ2dlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0IsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLElBQUksUUFBUSxDQUFDO0FBQ2I7OztHQUdHO0FBQ0g7SUFFSSxnQkFBWSxTQUFnQjtRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixRQUFRLEdBQUcsTUFBTSxDQUFDO0lBQ3BCLENBQUM7SUFHRCwwQkFBUyxHQUFULFVBQVUsUUFBUTtRQUNoQixPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNwQyxRQUFRLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBR0QsNEJBQVcsR0FBWCxVQUFZLFFBQVE7UUFDbEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUksSUFBSSxDQUFDLFNBQVMsU0FBSSxRQUFVLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELG9CQUFHLEdBQUg7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0QscUJBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTCxhQUFDO0FBQUQsQ0EvQkEsQUErQkMsSUFBQTtBQS9CRCwyQkErQkMsQ0FBQSIsImZpbGUiOiJwbHVnaW5zL2xvZ2dlci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
