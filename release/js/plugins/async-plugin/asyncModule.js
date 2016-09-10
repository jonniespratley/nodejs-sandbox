'use strict';
var debug = require('debug');
var log = require('npmlog');
//asyncModule.js
var asyncModule = {};
asyncModule.initialized = false;
asyncModule.initialize = function (callback) {
    log.info('initialize');
    setTimeout(function () {
        log.info('initialize', 'callback');
        asyncModule.initialized = true;
        callback(asyncModule);
    }, 1000);
};
asyncModule.tellMeSomething = function (callback) {
    log.info('tellMeSomething');
    process.nextTick(function () {
        if (!asyncModule.initialized) {
            return callback(new Error('I dont have anything to say right now'));
        }
        callback(null, 'Current time is: ' + new Date());
    });
};
module.exports = asyncModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL2FzeW5jLXBsdWdpbi9hc3luY01vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFFYixJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0IsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRTlCLGdCQUFnQjtBQUNoQixJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7QUFDckIsV0FBVyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7QUFHaEMsV0FBVyxDQUFDLFVBQVUsR0FBRyxVQUFVLFFBQVE7SUFDdkMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN2QixVQUFVLENBQUM7UUFDUCxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNuQyxXQUFXLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUMvQixRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDMUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2IsQ0FBQyxDQUFDO0FBRUYsV0FBVyxDQUFDLGVBQWUsR0FBRyxVQUFVLFFBQVE7SUFDNUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzVCLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDYixFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sQ0FBQyxRQUFRLENBQ1gsSUFBSSxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FDckQsQ0FBQztRQUNOLENBQUM7UUFDRCxRQUFRLENBQUMsSUFBSSxFQUFFLG1CQUFtQixHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDIiwiZmlsZSI6InBsdWdpbnMvYXN5bmMtcGx1Z2luL2FzeW5jTW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
