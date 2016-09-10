'use strict';
var assert = require('assert');
var asyncModule = require('./');
describe('async-plugin', function () {
    this.timeout(25000);
    it('should be defined', function () {
        assert(asyncModule);
    });
    it('should create instance', function (done) {
        asyncModule.initialize(function (data) {
            console.log('asyncModule.js initialized');
            done();
        });
    });
    xit('should invoke func', function (done) {
        asyncModule.tellMeSomething(function (err, resp) {
            assert(resp);
            done();
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL2FzeW5jLXBsdWdpbi9pbmRleC1zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQyxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFHbEMsUUFBUSxDQUFDLGNBQWMsRUFBRTtJQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BCLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRTtRQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsd0JBQXdCLEVBQUUsVUFBVSxJQUFJO1FBRXZDLFdBQVcsQ0FBQyxVQUFVLENBQUcsVUFBVSxJQUFJO1lBRW5DLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztZQUMxQyxJQUFJLEVBQUUsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDSCxHQUFHLENBQUMsb0JBQW9CLEVBQUUsVUFBVSxJQUFJO1FBQ3BDLFdBQVcsQ0FBQyxlQUFlLENBQUMsVUFBUyxHQUFHLEVBQUUsSUFBSTtZQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDYixJQUFJLEVBQUUsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFHUCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJwbHVnaW5zL2FzeW5jLXBsdWdpbi9pbmRleC1zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
