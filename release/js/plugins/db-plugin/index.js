'use strict';
var level = require('level');
var sublevel = require('level-sublevel');
var Logger = require('../logger').default;
module.exports = function (dbName) {
    if (!dbName) {
        dbName = 'db';
    }
    var log = Logger('db-plugin').getLogger(dbName);
    var db = sublevel(level(dbName, {
        valueEncoding: 'json'
    }));
    return db;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbnMvZGItcGx1Z2luL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMvQixJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUMzQyxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBRTVDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxNQUFNO0lBQzdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNWLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDbEIsQ0FBQztJQUNELElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEQsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUNiLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDVixhQUFhLEVBQUUsTUFBTTtLQUN4QixDQUFDLENBQ0wsQ0FBQztJQUVGLE1BQU0sQ0FBQyxFQUFFLENBQUM7QUFDZCxDQUFDLENBQUMiLCJmaWxlIjoicGx1Z2lucy9kYi1wbHVnaW4vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5jb25zdCBsZXZlbCA9IHJlcXVpcmUoJ2xldmVsJyk7XG5jb25zdCBzdWJsZXZlbCA9IHJlcXVpcmUoJ2xldmVsLXN1YmxldmVsJyk7XG5jb25zdCBMb2dnZXIgPSByZXF1aXJlKCcuLi9sb2dnZXInKS5kZWZhdWx0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYk5hbWUpIHtcbiAgICBpZiAoIWRiTmFtZSkge1xuICAgICAgICBkYk5hbWUgPSAnZGInO1xuICAgIH1cbiAgICB2YXIgbG9nID0gTG9nZ2VyKCdkYi1wbHVnaW4nKS5nZXRMb2dnZXIoZGJOYW1lKTtcbiAgICB2YXIgZGIgPSBzdWJsZXZlbChcbiAgICAgICAgbGV2ZWwoZGJOYW1lLCB7XG4gICAgICAgICAgICB2YWx1ZUVuY29kaW5nOiAnanNvbidcbiAgICAgICAgfSlcbiAgICApO1xuXG4gICAgcmV0dXJuIGRiO1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
