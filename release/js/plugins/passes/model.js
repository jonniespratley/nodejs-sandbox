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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbnMvcGFzc2VzL21vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM1Qjs7Ozs7O0dBTUc7QUFDSDtJQUVJLGVBQVksR0FBTztRQUNmLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUE7QUFQRCwwQkFPQyxDQUFBIiwiZmlsZSI6InBsdWdpbnMvcGFzc2VzL21vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuLyoqXG4gKiBUT0RPIC0gRGVzY3JpYmUgd2hhdCB5b3VyIG1vZGVsIGRvZXMuXG4gKlxuICogQGNsYXNzICAgICAgICAgUGFzc2VzXG4gKiBAbW9kdWxlICAgICAgICBQYXNzZXNcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RlbCB7XG4gICAgaWQ6c3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKG9iajphbnkpIHtcbiAgICAgICAgXy5hc3NpZ24odGhpcywgb2JqKTtcbiAgICAgICAgdGhpcy5pZCA9IG9iai5pZCB8fCBfLnVuaXF1ZUlkKCdtb2RlbC0nKTtcbiAgICAgICAgY29uc29sZS5sb2coJ01vZGVsIGNvbnN0cnVjdG9yJywgb2JqLCB0aGlzKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
