'use strict';
var assert = require('assert');
var Log = require('./').default;
var Logger = new Log('test');
var log = null;
describe('Logger Plugin', function () {
    it('should be defined', function () {
        assert(Logger);
    });
    it('getLogger(category) - should return logging instance.', function () {
        log = Logger.getLogger('spec');
        assert(log);
    });
    xit('info - should log info to console', function () {
        assert(log.info('info log'));
    });
    xit('error - should log error to console', function () {
        assert(log.error('error log'));
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL2xvZ2dlci9sb2dnZXItc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUNsQyxJQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMvQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUM7QUFFZixRQUFRLENBQUMsZUFBZSxFQUFFO0lBRXRCLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRTtRQUNwQixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsdURBQXVELEVBQUU7UUFDeEQsR0FBRyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsR0FBRyxDQUFDLG1DQUFtQyxFQUFFO1FBQ3ZDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDSCxHQUFHLENBQUMscUNBQXFDLEVBQUU7UUFDekMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InBsdWdpbnMvbG9nZ2VyL2xvZ2dlci1zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
