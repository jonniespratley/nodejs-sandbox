'use strict';
var assert = require('assert');
var asyncModule = require('./');
describe('async-plugin', function () {
    it('should be defined', function () {
        assert(asyncModule);
    });
    it('should create instance', function (done) {
        this.timeout(5000);
        asyncModule.initialize(function () {
            console.log('asyncModule.js initialized');
            done();
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL2FzeW5jLXBsdWdpbi9pbmRleC1zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQyxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFHbEMsUUFBUSxDQUFDLGNBQWMsRUFBRTtJQUVyQixFQUFFLENBQUMsbUJBQW1CLEVBQUU7UUFDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHdCQUF3QixFQUFFLFVBQVUsSUFBSTtRQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLFdBQVcsQ0FBQyxVQUFVLENBQUc7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1lBQzFDLElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUdQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InBsdWdpbnMvYXN5bmMtcGx1Z2luL2luZGV4LXNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
