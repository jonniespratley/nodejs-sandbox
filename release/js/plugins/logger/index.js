'use strict';
var debug = require('debug');
var Logger = (function () {
    function Logger(namespace) {
        this.namespace = namespace;
    }
    Logger.prototype.getLogger = function (category) {
        return debug(this.namespace + ":" + category);
    };
    return Logger;
}());
exports["default"] = Logger;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbnMvbG9nZ2VyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUUvQjtJQUNJLGdCQUFZLFNBQWdCO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFDRCwwQkFBUyxHQUFULFVBQVUsUUFBUTtRQUNkLE1BQU0sQ0FBQyxLQUFLLENBQUksSUFBSSxDQUFDLFNBQVMsU0FBSSxRQUFVLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUwsYUFBQztBQUFELENBUkEsQUFRQyxJQUFBO0FBUkQsMkJBUUMsQ0FBQSIsImZpbGUiOiJwbHVnaW5zL2xvZ2dlci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmNvbnN0IGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lc3BhY2U6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG4gICAgfVxuICAgIGdldExvZ2dlcihjYXRlZ29yeSkge1xuICAgICAgICByZXR1cm4gZGVidWcoYCR7dGhpcy5uYW1lc3BhY2V9OiR7Y2F0ZWdvcnl9YCk7XG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
