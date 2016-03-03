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
})();
exports["default"] = Model;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL3Bhc3Nlcy9tb2RlbC50cyJdLCJuYW1lcyI6WyJNb2RlbCIsIk1vZGVsLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixJQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDNUI7Ozs7OztHQU1HO0FBQ0g7SUFFSUEsZUFBWUEsR0FBT0E7UUFDZkMsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDcEJBLElBQUlBLENBQUNBLEVBQUVBLEdBQUdBLEdBQUdBLENBQUNBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBLFFBQVFBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO1FBQ3pDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxtQkFBbUJBLEVBQUVBLEdBQUdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO0lBQ2hEQSxDQUFDQTtJQUNMRCxZQUFDQTtBQUFEQSxDQVBBLEFBT0NBLElBQUE7QUFQRCwwQkFPQyxDQUFBIiwiZmlsZSI6InBsdWdpbnMvcGFzc2VzL21vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
