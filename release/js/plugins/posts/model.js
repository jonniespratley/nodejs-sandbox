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
    }
    return Model;
}());
exports["default"] = Model;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL3Bvc3RzL21vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM1Qjs7Ozs7O0dBTUc7QUFDSDtJQUVJLGVBQVksR0FBTztRQUNqQixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0wsWUFBQztBQUFELENBTkEsQUFNQyxJQUFBO0FBTkQsMEJBTUMsQ0FBQSIsImZpbGUiOiJwbHVnaW5zL3Bvc3RzL21vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
