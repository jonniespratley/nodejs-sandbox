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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbnMvcGFzc2VzL21vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM1Qjs7Ozs7O0dBTUc7QUFDSDtJQUdJLGVBQVksR0FBTztRQUNmLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FSQSxBQVFDLElBQUE7QUFSRCwwQkFRQyxDQUFBIiwiZmlsZSI6InBsdWdpbnMvcGFzc2VzL21vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuLyoqXG4gKiBUT0RPIC0gRGVzY3JpYmUgd2hhdCB5b3VyIG1vZGVsIGRvZXMuXG4gKlxuICogQGNsYXNzICAgICAgICAgUGFzc2VzXG4gKiBAbW9kdWxlICAgICAgICBQYXNzZXNcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RlbCB7XG4gICAgaWQ6c3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3Iob2JqOmFueSkge1xuICAgICAgICBfLmFzc2lnbih0aGlzLCBvYmopO1xuICAgICAgICB0aGlzLmlkID0gb2JqLmlkIHx8IF8udW5pcXVlSWQoJ21vZGVsLScpO1xuICAgICAgICBjb25zb2xlLmxvZygnTW9kZWwgY29uc3RydWN0b3InLCBvYmosIHRoaXMpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
