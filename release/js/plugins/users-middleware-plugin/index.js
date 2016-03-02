'use strict';
//import UsersController = require('./users-controller');
//import UsersService = require('./users-service');
var UsersRouter = require('./users-router').default;
/**
 * @class         Users
 * @module        Users
 * @constructor
 *
 */
var Users = (function () {
    //controller: UsersController;
    function Users(app) {
        console.log('Plugin Constructor');
        // this.router = new UsersRouter(app);
        return this;
    }
    return Users;
}());
exports.Users = Users;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbnMvdXNlcnMtbWlkZGxld2FyZS1wbHVnaW4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBR2IseURBQXlEO0FBQ3pELG1EQUFtRDtBQUNuRCxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFHdEQ7Ozs7O0dBS0c7QUFDSDtJQUtJLDhCQUE4QjtJQUU5QixlQUFZLEdBQVc7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xDLHNDQUFzQztRQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTCxZQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUE7QUFiWSxhQUFLLFFBYWpCLENBQUEiLCJmaWxlIjoicGx1Z2lucy91c2Vycy1taWRkbGV3YXJlLXBsdWdpbi9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmltcG9ydCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuXG4vL2ltcG9ydCBVc2Vyc0NvbnRyb2xsZXIgPSByZXF1aXJlKCcuL3VzZXJzLWNvbnRyb2xsZXInKTtcbi8vaW1wb3J0IFVzZXJzU2VydmljZSA9IHJlcXVpcmUoJy4vdXNlcnMtc2VydmljZScpO1xuY29uc3QgVXNlcnNSb3V0ZXIgPSByZXF1aXJlKCcuL3VzZXJzLXJvdXRlcicpLmRlZmF1bHQ7XG5cblxuLyoqXG4gKiBAY2xhc3MgICAgICAgICBVc2Vyc1xuICogQG1vZHVsZSAgICAgICAgVXNlcnNcbiAqIEBjb25zdHJ1Y3RvclxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIFVzZXJzIHtcbiAgICBuYW1lOnN0cmluZztcbiAgICBvcHRpb25zOm9iamVjdDtcbiAgICAvLyAgc2VydmljZTogVXNlcnNTZXJ2aWNlO1xuICAgIHJvdXRlcjpVc2Vyc1JvdXRlcjtcbiAgICAvL2NvbnRyb2xsZXI6IFVzZXJzQ29udHJvbGxlcjtcblxuICAgIGNvbnN0cnVjdG9yKGFwcDpleHByZXNzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdQbHVnaW4gQ29uc3RydWN0b3InKTtcbiAgICAgICAgLy8gdGhpcy5yb3V0ZXIgPSBuZXcgVXNlcnNSb3V0ZXIoYXBwKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
