'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var App = require('./app').default;
var DiContainer = require('./plugins/di-container').default;
var Program = (function (_super) {
    __extends(Program, _super);
    function Program(options) {
        _super.call(this, 'program');
        this.app = new App(options);
        this.register('app', this.app);
        this.register('program', this);
        this.register('namespace', 'sandbox');
        this.register('dbName', 'db');
        this.register('tokenSecret', 'SHHH!');
        //program.plugin('serviceLocator', require('./plugins/server-locator'));
        this.plugin('Logger', require('./plugins/logger').default);
        this.plugin('db', require('./plugins/db-plugin').default);
        if (options.run) {
            this.run(options.run);
        }
    }
    Program.prototype.run = function (cb) {
        console.log('Program.run');
        if (cb) {
            cb(this);
        }
    };
    Program.prototype.use = function (plugin) {
        console.log('Program.use', plugin);
        this.inject(plugin);
        return this;
    };
    return Program;
}(DiContainer));
exports["default"] = Program;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyYW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7QUFDYixJQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ3JDLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUU5RDtJQUFxQywyQkFBVztJQUM1QyxpQkFBWSxPQUFPO1FBQ2Ysa0JBQU0sU0FBUyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEMsd0VBQXdFO1FBQ3hFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUIsQ0FBQztJQUVMLENBQUM7SUFFRCxxQkFBRyxHQUFILFVBQUksRUFBRTtRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0IsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNMLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNiLENBQUM7SUFDTCxDQUFDO0lBRUQscUJBQUcsR0FBSCxVQUFJLE1BQU07UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQS9CQSxBQStCQyxDQS9Cb0MsV0FBVyxHQStCL0M7QUEvQkQsNEJBK0JDLENBQUEiLCJmaWxlIjoicHJvZ3JhbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmNvbnN0IEFwcCA9IHJlcXVpcmUoJy4vYXBwJykuZGVmYXVsdDtcbmNvbnN0IERpQ29udGFpbmVyID0gcmVxdWlyZSgnLi9wbHVnaW5zL2RpLWNvbnRhaW5lcicpLmRlZmF1bHQ7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2dyYW0gZXh0ZW5kcyBEaUNvbnRhaW5lciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcigncHJvZ3JhbScpO1xuICAgICAgICB0aGlzLmFwcCA9IG5ldyBBcHAob3B0aW9ucyk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIoJ2FwcCcsIHRoaXMuYXBwKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlcigncHJvZ3JhbScsIHRoaXMpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKCduYW1lc3BhY2UnLCAnc2FuZGJveCcpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKCdkYk5hbWUnLCAnZGInKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlcigndG9rZW5TZWNyZXQnLCAnU0hISCEnKTtcblxuICAgICAgICAvL3Byb2dyYW0ucGx1Z2luKCdzZXJ2aWNlTG9jYXRvcicsIHJlcXVpcmUoJy4vcGx1Z2lucy9zZXJ2ZXItbG9jYXRvcicpKTtcbiAgICAgICAgdGhpcy5wbHVnaW4oJ0xvZ2dlcicsIHJlcXVpcmUoJy4vcGx1Z2lucy9sb2dnZXInKS5kZWZhdWx0KTtcbiAgICAgICAgdGhpcy5wbHVnaW4oJ2RiJywgcmVxdWlyZSgnLi9wbHVnaW5zL2RiLXBsdWdpbicpLmRlZmF1bHQpO1xuICAgICAgICBpZiAob3B0aW9ucy5ydW4pIHtcbiAgICAgICAgICAgIHRoaXMucnVuKG9wdGlvbnMucnVuKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcnVuKGNiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdQcm9ncmFtLnJ1bicpO1xuICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICAgIGNiKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlKHBsdWdpbikge1xuICAgICAgICBjb25zb2xlLmxvZygnUHJvZ3JhbS51c2UnLCBwbHVnaW4pO1xuICAgICAgICB0aGlzLmluamVjdChwbHVnaW4pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
