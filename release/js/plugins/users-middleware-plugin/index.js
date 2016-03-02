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
function UsersPlugin(app) {
    console.log('Plugin Constructor');
    this.router = new UsersRouter(app);
    app.use('/', this.router);
}
exports["default"] = UsersPlugin;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbnMvdXNlcnMtbWlkZGxld2FyZS1wbHVnaW4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBR2IseURBQXlEO0FBQ3pELG1EQUFtRDtBQUNuRCxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFHdEQ7Ozs7O0dBS0c7QUFDSCxxQkFBb0MsR0FBRztJQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDOUIsQ0FBQztBQUpELGdDQUlDLENBQUEiLCJmaWxlIjoicGx1Z2lucy91c2Vycy1taWRkbGV3YXJlLXBsdWdpbi9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmltcG9ydCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuXG4vL2ltcG9ydCBVc2Vyc0NvbnRyb2xsZXIgPSByZXF1aXJlKCcuL3VzZXJzLWNvbnRyb2xsZXInKTtcbi8vaW1wb3J0IFVzZXJzU2VydmljZSA9IHJlcXVpcmUoJy4vdXNlcnMtc2VydmljZScpO1xuY29uc3QgVXNlcnNSb3V0ZXIgPSByZXF1aXJlKCcuL3VzZXJzLXJvdXRlcicpLmRlZmF1bHQ7XG5cblxuLyoqXG4gKiBAY2xhc3MgICAgICAgICBVc2Vyc1xuICogQG1vZHVsZSAgICAgICAgVXNlcnNcbiAqIEBjb25zdHJ1Y3RvclxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcnNQbHVnaW4oYXBwKSB7XG4gICAgY29uc29sZS5sb2coJ1BsdWdpbiBDb25zdHJ1Y3RvcicpO1xuICAgIHRoaXMucm91dGVyID0gbmV3IFVzZXJzUm91dGVyKGFwcCk7XG4gICAgYXBwLnVzZSgnLycsIHRoaXMucm91dGVyKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
