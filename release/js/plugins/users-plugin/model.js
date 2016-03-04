'use strict';
var _ = require('lodash');
/**
 * @class         UsersPluginModel
 * @module        plugins/UsersPlugin
 * @constructor
 */
var UsersPluginModel = (function () {
    function UsersPluginModel(obj) {
        _.assign(this, obj);
        this.id = obj.id || _.uniqueId('model-');
    }
    return UsersPluginModel;
})();
exports["default"] = UsersPluginModel;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL3VzZXJzLXBsdWdpbi9tb2RlbC50cyJdLCJuYW1lcyI6WyJVc2Vyc1BsdWdpbk1vZGVsIiwiVXNlcnNQbHVnaW5Nb2RlbC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsSUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzVCOzs7O0dBSUc7QUFDSDtJQUVDQSwwQkFBWUEsR0FBT0E7UUFDbEJDLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO1FBQ3BCQSxJQUFJQSxDQUFDQSxFQUFFQSxHQUFHQSxHQUFHQSxDQUFDQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtJQUMxQ0EsQ0FBQ0E7SUFDRkQsdUJBQUNBO0FBQURBLENBTkEsQUFNQ0EsSUFBQTtBQU5ELHFDQU1DLENBQUEiLCJmaWxlIjoicGx1Z2lucy91c2Vycy1wbHVnaW4vbW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
