'use strict';
var debug = require('debug');
var Logger = (function () {
    function Logger() {
    }
    Logger.getLogger = function (category) {
        return debug(namespace + ":" + category);
    };
    return Logger;
}());
exports["default"] = Logger;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbnMvbG9nZ2VyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUUvQjtJQUFBO0lBTUEsQ0FBQztJQUpVLGdCQUFTLEdBQWhCLFVBQWlCLFFBQVE7UUFDckIsTUFBTSxDQUFDLEtBQUssQ0FBSSxTQUFTLFNBQUksUUFBVSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVMLGFBQUM7QUFBRCxDQU5BLEFBTUMsSUFBQTtBQU5ELDJCQU1DLENBQUEiLCJmaWxlIjoicGx1Z2lucy9sb2dnZXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlciB7XG5cbiAgICBzdGF0aWMgZ2V0TG9nZ2VyKGNhdGVnb3J5KSB7XG4gICAgICAgIHJldHVybiBkZWJ1ZyhgJHtuYW1lc3BhY2V9OiR7Y2F0ZWdvcnl9YCk7XG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
