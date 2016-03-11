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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL2xvZ2dlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFL0I7SUFDSSxnQkFBWSxTQUFnQjtRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBQ0QsMEJBQVMsR0FBVCxVQUFVLFFBQVE7UUFDZCxNQUFNLENBQUMsS0FBSyxDQUFJLElBQUksQ0FBQyxTQUFTLFNBQUksUUFBVSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVMLGFBQUM7QUFBRCxDQVJBLEFBUUMsSUFBQTtBQVJELDJCQVFDLENBQUEiLCJmaWxlIjoicGx1Z2lucy9sb2dnZXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
