'use strict';
var Controller = require('./controller').default;
var Model = require('./model').default;
var Router = require('./router').default;
var Service = require('./service').default;
/**
 * This is the Passes Plugin
 * @module        Passes
 * @constructor
 */
var Plugin = (function () {
    /**
     * Initialize the app
     * @constructor
     * @param app
     */
    function Plugin(app) {
        this.Router = new Router(app);
        console.log('Plugin Constructor');
    }
    return Plugin;
}());
exports["default"] = Plugin;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL2RldmljZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsSUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUNuRCxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ3pDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDM0MsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUc3Qzs7OztHQUlHO0FBQ0g7SUFRSTs7OztPQUlHO0lBQ0gsZ0JBQVksR0FBTztRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBRXRDLENBQUM7SUFFTCxhQUFDO0FBQUQsQ0FuQkEsQUFtQkMsSUFBQTtBQW5CRCwyQkFtQkMsQ0FBQSIsImZpbGUiOiJwbHVnaW5zL2RldmljZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
