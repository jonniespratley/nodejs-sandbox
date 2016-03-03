//asyncModuleWrapper.js
'use strict';
var asyncModule = require('./asyncModule');
var asyncModuleWrapper = {};
var activeState, pending = [], initializedState, notInitializedState;
/**
 * Initialized module
 * @type {asyncModule|exports|module.exports}
 */
initializedState = asyncModule;
/**
 * Not initialized module
 * @type {{initialize: notInitializedState.initialize, tellMeSomething: notInitializedState.tellMeSomething}}
 */
notInitializedState = {
    /**
     * Initialize the async module
     * @param callback
     */
    initialize: function (callback) {
        asyncModule.initialize(function () {
            asyncModuleWrapper.initalized = true;
            activeState = initializedState;
            pending.forEach(function (req) {
                asyncModule[req.method].apply(null, req.args);
            });
            pending = [];
            callback();
        });
    },
    /**
     * Method example
     * @param callback
     * @returns {Number}
     */
    tellMeSomething: function (callback) {
        return pending.push({
            method: 'tellMeSomething',
            args: arguments
        });
    }
};
/**
 * Active module state
 * @type {{initialize: notInitializedState.initialize, tellMeSomething: notInitializedState.tellMeSomething}}
 */
activeState = notInitializedState;
/**
 *
 * @type {boolean}
 */
asyncModuleWrapper.initialized = false;
/**
 *
 * @returns {*}
 */
asyncModuleWrapper.initialize = function () {
    return activeState.initialize.apply(activeState, arguments);
};
/**
 *
 * @type {{}}
 */
module.exports = asyncModuleWrapper;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbnMvYXN5bmMtcGx1Z2luL2FzeW5jTW9kdWxlV3JhcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1QkFBdUI7QUFDdkIsWUFBWSxDQUFDO0FBQ2IsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQzdDLElBQUksa0JBQWtCLEdBQUcsRUFBRSxDQUFDO0FBQzVCLElBQUksV0FBVyxFQUFFLE9BQU8sR0FBRyxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUM7QUFFckU7OztHQUdHO0FBQ0gsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDO0FBRS9COzs7R0FHRztBQUNILG1CQUFtQixHQUFHO0lBQ2xCOzs7T0FHRztJQUNILFVBQVUsRUFBRSxVQUFVLFFBQVE7UUFDMUIsV0FBVyxDQUFDLFVBQVUsQ0FBQztZQUNuQixrQkFBa0IsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3JDLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQztZQUUvQixPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRztnQkFDekIsV0FBVyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsRCxDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sR0FBRyxFQUFFLENBQUM7WUFFYixRQUFRLEVBQUUsQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNEOzs7O09BSUc7SUFDSCxlQUFlLEVBQUUsVUFBVSxRQUFRO1FBQy9CLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ2hCLE1BQU0sRUFBRSxpQkFBaUI7WUFDekIsSUFBSSxFQUFFLFNBQVM7U0FDbEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKLENBQUM7QUFDRjs7O0dBR0c7QUFDSCxXQUFXLEdBQUcsbUJBQW1CLENBQUM7QUFFbEM7OztHQUdHO0FBQ0gsa0JBQWtCLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztBQUV2Qzs7O0dBR0c7QUFDSCxrQkFBa0IsQ0FBQyxVQUFVLEdBQUc7SUFDNUIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNoRSxDQUFDLENBQUM7QUFFRjs7O0dBR0c7QUFDSCxNQUFNLENBQUMsT0FBTyxHQUFHLGtCQUFrQixDQUFDIiwiZmlsZSI6InBsdWdpbnMvYXN5bmMtcGx1Z2luL2FzeW5jTW9kdWxlV3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vYXN5bmNNb2R1bGVXcmFwcGVyLmpzXG4ndXNlIHN0cmljdCc7XG5jb25zdCBhc3luY01vZHVsZSA9IHJlcXVpcmUoJy4vYXN5bmNNb2R1bGUnKTtcbnZhciBhc3luY01vZHVsZVdyYXBwZXIgPSB7fTtcbnZhciBhY3RpdmVTdGF0ZSwgcGVuZGluZyA9IFtdLCBpbml0aWFsaXplZFN0YXRlLCBub3RJbml0aWFsaXplZFN0YXRlO1xuXG4vKipcbiAqIEluaXRpYWxpemVkIG1vZHVsZVxuICogQHR5cGUge2FzeW5jTW9kdWxlfGV4cG9ydHN8bW9kdWxlLmV4cG9ydHN9XG4gKi9cbmluaXRpYWxpemVkU3RhdGUgPSBhc3luY01vZHVsZTtcblxuLyoqXG4gKiBOb3QgaW5pdGlhbGl6ZWQgbW9kdWxlXG4gKiBAdHlwZSB7e2luaXRpYWxpemU6IG5vdEluaXRpYWxpemVkU3RhdGUuaW5pdGlhbGl6ZSwgdGVsbE1lU29tZXRoaW5nOiBub3RJbml0aWFsaXplZFN0YXRlLnRlbGxNZVNvbWV0aGluZ319XG4gKi9cbm5vdEluaXRpYWxpemVkU3RhdGUgPSB7XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSB0aGUgYXN5bmMgbW9kdWxlXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIGFzeW5jTW9kdWxlLmluaXRpYWxpemUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYXN5bmNNb2R1bGVXcmFwcGVyLmluaXRhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgYWN0aXZlU3RhdGUgPSBpbml0aWFsaXplZFN0YXRlO1xuXG4gICAgICAgICAgICBwZW5kaW5nLmZvckVhY2goZnVuY3Rpb24gKHJlcSkge1xuICAgICAgICAgICAgICAgIGFzeW5jTW9kdWxlW3JlcS5tZXRob2RdLmFwcGx5KG51bGwsIHJlcS5hcmdzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcGVuZGluZyA9IFtdO1xuXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIE1ldGhvZCBleGFtcGxlXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICB0ZWxsTWVTb21ldGhpbmc6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gcGVuZGluZy5wdXNoKHtcbiAgICAgICAgICAgIG1ldGhvZDogJ3RlbGxNZVNvbWV0aGluZycsXG4gICAgICAgICAgICBhcmdzOiBhcmd1bWVudHNcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbi8qKlxuICogQWN0aXZlIG1vZHVsZSBzdGF0ZVxuICogQHR5cGUge3tpbml0aWFsaXplOiBub3RJbml0aWFsaXplZFN0YXRlLmluaXRpYWxpemUsIHRlbGxNZVNvbWV0aGluZzogbm90SW5pdGlhbGl6ZWRTdGF0ZS50ZWxsTWVTb21ldGhpbmd9fVxuICovXG5hY3RpdmVTdGF0ZSA9IG5vdEluaXRpYWxpemVkU3RhdGU7XG5cbi8qKlxuICpcbiAqIEB0eXBlIHtib29sZWFufVxuICovXG5hc3luY01vZHVsZVdyYXBwZXIuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuLyoqXG4gKlxuICogQHJldHVybnMgeyp9XG4gKi9cbmFzeW5jTW9kdWxlV3JhcHBlci5pbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhY3RpdmVTdGF0ZS5pbml0aWFsaXplLmFwcGx5KGFjdGl2ZVN0YXRlLCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKlxuICogQHR5cGUge3t9fVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGFzeW5jTW9kdWxlV3JhcHBlcjtcblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
