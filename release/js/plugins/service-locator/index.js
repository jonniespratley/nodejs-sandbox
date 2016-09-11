'use strict';
var dependencies = {};
var factories = {};
var serviceLocator = {};
/**
 * This is the Passes Plugin
 * @module        ServiceLocator
 * @class        ServiceLocator
 *
 * @example
 * const ServiceLocator = require('').default;
 * let mockService = {
 *      name: 'test'
 * };
 * ServiceLocator.register('mockService', mockService);
 * ServiceLocator.get('mockService').name
 */
var ServiceLocator = (function () {
    function ServiceLocator() {
    }
    ServiceLocator.factory = function (name, factory) {
        factories[name] = factory;
    };
    ServiceLocator.register = function (name, instance) {
        dependencies[name] = instance;
    };
    ServiceLocator.get = function (name) {
        if (!dependencies[name]) {
            var factory = factories[name];
            dependencies[name] = factory && factory(serviceLocator);
            if (!dependencies[name]) {
                throw new Error('Cannot find module: ' + name);
            }
        }
        return dependencies[name];
    };
    return ServiceLocator;
}());
exports["default"] = ServiceLocator;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL3NlcnZpY2UtbG9jYXRvci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixJQUFJLFlBQVksR0FBRyxFQUFFLENBQUM7QUFDdEIsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQ25CLElBQUksY0FBYyxHQUFHLEVBQUUsQ0FBQztBQUN4Qjs7Ozs7Ozs7Ozs7O0dBWUc7QUFDSDtJQUFBO0lBc0JBLENBQUM7SUFsQlUsc0JBQU8sR0FBZCxVQUFlLElBQUksRUFBRSxPQUFPO1FBQ3hCLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUM7SUFDOUIsQ0FBQztJQUVNLHVCQUFRLEdBQWYsVUFBZ0IsSUFBSSxFQUFFLFFBQVE7UUFDMUIsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQztJQUNsQyxDQUFDO0lBRU0sa0JBQUcsR0FBVixVQUFXLElBQUk7UUFDWCxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxPQUFPLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlCLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3hELEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUNuRCxDQUFDO1FBQ0wsQ0FBQztRQUNELE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0F0QkEsQUFzQkMsSUFBQTtBQXRCRCxtQ0FzQkMsQ0FBQSIsImZpbGUiOiJwbHVnaW5zL3NlcnZpY2UtbG9jYXRvci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
