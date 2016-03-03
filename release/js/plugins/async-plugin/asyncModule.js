'use strict';
var debug = require('debug');
var log = debug('nodejs-sandbox:asyncModule');
//asyncModule.js
var asyncModule = {};
asyncModule.initialized = false;
asyncModule.initialize = function (callback) {
    log('initialize');
    setTimeout(function () {
        asyncModule.initialized = true;
        callback();
    }, 1000);
};
asyncModule.tellMeSomething = function (callback) {
    process.nextTick(function () {
        if (!asyncModule.initialized) {
            return callback(new Error('I don\'t have anything to say right now'));
        }
        callback(null, 'Current time is: ' + new Date());
    });
};
module.exports = asyncModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbnMvYXN5bmMtcGx1Z2luL2FzeW5jTW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUViLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMvQixJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQztBQUVoRCxnQkFBZ0I7QUFDaEIsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLFdBQVcsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0FBR2hDLFdBQVcsQ0FBQyxVQUFVLEdBQUcsVUFBVSxRQUFRO0lBQ3ZDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsQixVQUFVLENBQUM7UUFDUCxXQUFXLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUMvQixRQUFRLEVBQUUsQ0FBQztJQUNmLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNiLENBQUMsQ0FBQztBQUVGLFdBQVcsQ0FBQyxlQUFlLEdBQUcsVUFBVSxRQUFRO0lBQzVDLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDYixFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sQ0FBQyxRQUFRLENBQ1gsSUFBSSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FDdkQsQ0FBQztRQUNOLENBQUM7UUFDRCxRQUFRLENBQUMsSUFBSSxFQUFFLG1CQUFtQixHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDIiwiZmlsZSI6InBsdWdpbnMvYXN5bmMtcGx1Z2luL2FzeW5jTW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJyk7XG5jb25zdCBsb2cgPSBkZWJ1Zygnbm9kZWpzLXNhbmRib3g6YXN5bmNNb2R1bGUnKTtcblxuLy9hc3luY01vZHVsZS5qc1xudmFyIGFzeW5jTW9kdWxlID0ge307XG5hc3luY01vZHVsZS5pbml0aWFsaXplZCA9IGZhbHNlO1xuXG5cbmFzeW5jTW9kdWxlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICBsb2coJ2luaXRpYWxpemUnKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYXN5bmNNb2R1bGUuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgIH0sIDEwMDApO1xufTtcblxuYXN5bmNNb2R1bGUudGVsbE1lU29tZXRoaW5nID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghYXN5bmNNb2R1bGUuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhcbiAgICAgICAgICAgICAgICBuZXcgRXJyb3IoJ0kgZG9uXFwndCBoYXZlIGFueXRoaW5nIHRvIHNheSByaWdodCBub3cnKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBjYWxsYmFjayhudWxsLCAnQ3VycmVudCB0aW1lIGlzOiAnICsgbmV3IERhdGUoKSk7XG4gICAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFzeW5jTW9kdWxlOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==