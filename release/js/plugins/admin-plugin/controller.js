'use strict';
/**
 * TODO - Describe what your controller does.
 *
 * @class         AdminPlugin.Model
 * @module        AdminPlugin
 * @constructor
 */
var AdminPluginController = (function () {
    function AdminPluginController(options) {
        console.log('Controller Constructor');
    }
    AdminPluginController.prototype.index = function (req, res, next) {
        res.status(200).json({
            message: 'admin plugin index route'
        });
    };
    AdminPluginController.prototype.use = function (req, res, next) {
    };
    AdminPluginController.prototype.get_route = function (req, res, next) {
    };
    AdminPluginController.prototype.post_route = function (req, res, next) {
    };
    AdminPluginController.prototype.put_route = function (req, res, next) {
    };
    AdminPluginController.prototype.delete_route = function (req, res, next) {
    };
    return AdminPluginController;
}());
exports["default"] = AdminPluginController;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbnMvYWRtaW4tcGx1Z2luL2NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBRWI7Ozs7OztHQU1HO0FBQ0g7SUFDQywrQkFBWSxPQUFPO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQscUNBQUssR0FBTCxVQUFNLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSTtRQUNuQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNwQixPQUFPLEVBQUUsMEJBQTBCO1NBQ25DLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxtQ0FBRyxHQUFILFVBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO0lBRWxCLENBQUM7SUFFRCx5Q0FBUyxHQUFULFVBQVUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO0lBRXhCLENBQUM7SUFFRCwwQ0FBVSxHQUFWLFVBQVcsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO0lBRXpCLENBQUM7SUFFRCx5Q0FBUyxHQUFULFVBQVUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO0lBRXhCLENBQUM7SUFFRCw0Q0FBWSxHQUFaLFVBQWEsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO0lBRTNCLENBQUM7SUFDRiw0QkFBQztBQUFELENBOUJBLEFBOEJDLElBQUE7QUE5QkQsMENBOEJDLENBQUEiLCJmaWxlIjoicGx1Z2lucy9hZG1pbi1wbHVnaW4vY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmltcG9ydCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuLyoqXG4gKiBUT0RPIC0gRGVzY3JpYmUgd2hhdCB5b3VyIGNvbnRyb2xsZXIgZG9lcy5cbiAqXG4gKiBAY2xhc3MgICAgICAgICBBZG1pblBsdWdpbi5Nb2RlbFxuICogQG1vZHVsZSAgICAgICAgQWRtaW5QbHVnaW5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZG1pblBsdWdpbkNvbnRyb2xsZXIge1xuXHRjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG5cdFx0Y29uc29sZS5sb2coJ0NvbnRyb2xsZXIgQ29uc3RydWN0b3InKTtcblx0fVxuXG5cdGluZGV4KHJlcSwgcmVzLCBuZXh0KSB7XG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oe1xuXHRcdFx0bWVzc2FnZTogJ2FkbWluIHBsdWdpbiBpbmRleCByb3V0ZSdcblx0XHR9KTtcblx0fVxuXG5cdHVzZShyZXEsIHJlcywgbmV4dCkge1xuXG5cdH1cblxuXHRnZXRfcm91dGUocmVxLCByZXMsIG5leHQpIHtcblxuXHR9XG5cblx0cG9zdF9yb3V0ZShyZXEsIHJlcywgbmV4dCkge1xuXG5cdH1cblxuXHRwdXRfcm91dGUocmVxLCByZXMsIG5leHQpIHtcblxuXHR9XG5cblx0ZGVsZXRlX3JvdXRlKHJlcSwgcmVzLCBuZXh0KSB7XG5cblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
