'use strict';
var levelup = require('levelup');
//const sublevel = require('level-sublevel');
var Logger = require('../logger').default;
//const leveldb = require('leveldb');
function DB(dbName, cb) {
    if (!dbName) {
        dbName = 'db';
    }
    var log = new Logger('db-plugin').getLogger(dbName);
    var db = levelup(dbName, {
        valueEncoding: 'json'
    });
    //db.log = log;
    return db;
}
exports.__esModule = true;
exports["default"] = DB;
;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL2xldmVsZGItcGx1Z2luL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNuQyw2Q0FBNkM7QUFDN0MsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUM1QyxxQ0FBcUM7QUFFckMsWUFBMkIsTUFBTSxFQUFFLEVBQUU7SUFJakMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ1YsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNsQixDQUFDO0lBQ0QsSUFBSSxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXBELElBQUksRUFBRSxHQUFLLE9BQU8sQ0FBQyxNQUFNLEVBQUU7UUFDckIsYUFBYSxFQUFFLE1BQU07S0FDeEIsQ0FBQyxDQUFDO0lBQ0wsZUFBZTtJQUdmLE1BQU0sQ0FBQyxFQUFFLENBQUM7QUFDZCxDQUFDO0FBaEJEO3VCQWdCQyxDQUFBO0FBQUEsQ0FBQyIsImZpbGUiOiJwbHVnaW5zL2xldmVsZGItcGx1Z2luL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
