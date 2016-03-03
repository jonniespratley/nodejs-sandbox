'use strict';
var _ = require('lodash');
/**
 * TODO - Describe what your model does.
 *
 * @class         Passes
 * @module        Passes
 * @constructor
 */
var Model = (function () {
    function Model(obj) {
        _.assign(this, obj);
        this.id = obj.id || _.uniqueId('model-');
        console.log('Model constructor', obj, this);
    }
    return Model;
}());
exports["default"] = Model;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL3Bhc3Nlcy9tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixJQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDNUI7Ozs7OztHQU1HO0FBQ0g7SUFFSSxlQUFZLEdBQU87UUFDZixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0wsWUFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUEQsMEJBT0MsQ0FBQSIsImZpbGUiOiJwbHVnaW5zL3Bhc3Nlcy9tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
