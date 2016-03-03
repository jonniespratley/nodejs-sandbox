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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL2FzeW5jLXBsdWdpbi9hc3luY01vZHVsZVdyYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUJBQXVCO0FBQ3ZCLFlBQVksQ0FBQztBQUNiLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM3QyxJQUFJLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztBQUM1QixJQUFJLFdBQVcsRUFBRSxPQUFPLEdBQUcsRUFBRSxFQUFFLGdCQUFnQixFQUFFLG1CQUFtQixDQUFDO0FBRXJFOzs7R0FHRztBQUNILGdCQUFnQixHQUFHLFdBQVcsQ0FBQztBQUUvQjs7O0dBR0c7QUFDSCxtQkFBbUIsR0FBRztJQUNsQjs7O09BR0c7SUFDSCxVQUFVLEVBQUUsVUFBVSxRQUFRO1FBQzFCLFdBQVcsQ0FBQyxVQUFVLENBQUM7WUFDbkIsa0JBQWtCLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUNyQyxXQUFXLEdBQUcsZ0JBQWdCLENBQUM7WUFFL0IsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUc7Z0JBQ3pCLFdBQVcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEQsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBRWIsUUFBUSxFQUFFLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRDs7OztPQUlHO0lBQ0gsZUFBZSxFQUFFLFVBQVUsUUFBUTtRQUMvQixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUNoQixNQUFNLEVBQUUsaUJBQWlCO1lBQ3pCLElBQUksRUFBRSxTQUFTO1NBQ2xCLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSixDQUFDO0FBQ0Y7OztHQUdHO0FBQ0gsV0FBVyxHQUFHLG1CQUFtQixDQUFDO0FBRWxDOzs7R0FHRztBQUNILGtCQUFrQixDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7QUFFdkM7OztHQUdHO0FBQ0gsa0JBQWtCLENBQUMsVUFBVSxHQUFHO0lBQzVCLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDaEUsQ0FBQyxDQUFDO0FBRUY7OztHQUdHO0FBQ0gsTUFBTSxDQUFDLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQyIsImZpbGUiOiJwbHVnaW5zL2FzeW5jLXBsdWdpbi9hc3luY01vZHVsZVdyYXBwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
