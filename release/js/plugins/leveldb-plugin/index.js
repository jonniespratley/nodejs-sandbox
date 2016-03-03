'use strict';
var level = require('level');
var sublevel = require('level-sublevel');
var Logger = require('../logger').default;
function DB(dbName) {
    if (!dbName) {
        dbName = 'db';
    }
    var log = new Logger('db-plugin').getLogger(dbName);
    var db = sublevel(level(dbName, {
        valueEncoding: 'json'
    }));
    return db;
}
exports["default"] = DB;
;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbnMvbGV2ZWxkYi1wbHVnaW4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzNDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFFNUMsWUFBMkIsTUFBTTtJQUM3QixFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDVixNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLENBQUM7SUFDRCxJQUFJLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEQsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUNiLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDVixhQUFhLEVBQUUsTUFBTTtLQUN4QixDQUFDLENBQ0wsQ0FBQztJQUVGLE1BQU0sQ0FBQyxFQUFFLENBQUM7QUFDZCxDQUFDO0FBWkQsdUJBWUMsQ0FBQTtBQUFBLENBQUMiLCJmaWxlIjoicGx1Z2lucy9sZXZlbGRiLXBsdWdpbi9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmNvbnN0IGxldmVsID0gcmVxdWlyZSgnbGV2ZWwnKTtcbmNvbnN0IHN1YmxldmVsID0gcmVxdWlyZSgnbGV2ZWwtc3VibGV2ZWwnKTtcbmNvbnN0IExvZ2dlciA9IHJlcXVpcmUoJy4uL2xvZ2dlcicpLmRlZmF1bHQ7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERCKGRiTmFtZSkge1xuICAgIGlmICghZGJOYW1lKSB7XG4gICAgICAgIGRiTmFtZSA9ICdkYic7XG4gICAgfVxuICAgIHZhciBsb2cgPSBuZXcgTG9nZ2VyKCdkYi1wbHVnaW4nKS5nZXRMb2dnZXIoZGJOYW1lKTtcbiAgICB2YXIgZGIgPSBzdWJsZXZlbChcbiAgICAgICAgbGV2ZWwoZGJOYW1lLCB7XG4gICAgICAgICAgICB2YWx1ZUVuY29kaW5nOiAnanNvbidcbiAgICAgICAgfSlcbiAgICApO1xuXG4gICAgcmV0dXJuIGRiO1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==