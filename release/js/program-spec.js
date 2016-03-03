"use strict";
var assert = require('assert');
var Program = require('./program').default;
var Plugin = require('./plugins/app-plugin');
var instance;
var mockPlugin = null;
describe('Program', function () {
    it('should be defined', function (done) {
        assert(Program);
        done();
    });
    it('should create instance', function (done) {
        instance = new Program();
        assert(instance);
        done();
    });
    it('run() - should invoke callback function when ran', function (done) {
        new Program({
            namespace: 'test-app',
            dbName: 'test-db',
            run: function (app) {
                assert(app instanceof Program);
                assert(app.initialized === true, 'initialized is true');
                assert(app.namespace === 'test-app', 'has namespace');
                assert(app.dbName === 'test-db', 'has dbName');
                done();
            }
        });
    });
    it('run() - should invoke callback function when ran', function (done) {
        instance.run(function (app) {
            assert(app instanceof Program);
            done();
        });
    });
    it('use(plugin) - should inject all dependencies and load plugin', function (done) {
        instance.use(Plugin);
        assert(instance.plugins.plugin === Plugin);
        done();
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvcHJvZ3JhbS1zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQyxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQzdDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQy9DLElBQUksUUFBUSxDQUFDO0FBRWIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBRXRCLFFBQVEsQ0FBQyxTQUFTLEVBQUU7SUFDaEIsRUFBRSxDQUFDLG1CQUFtQixFQUFFLFVBQVUsSUFBSTtRQUNsQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEIsSUFBSSxFQUFFLENBQUM7SUFDWCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxVQUFVLElBQUk7UUFDdkMsUUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDekIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pCLElBQUksRUFBRSxDQUFDO0lBQ1gsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsa0RBQWtELEVBQUUsVUFBVSxJQUFJO1FBQ2pFLElBQUksT0FBTyxDQUFDO1lBQ1IsU0FBUyxFQUFFLFVBQVU7WUFDckIsTUFBTSxFQUFFLFNBQVM7WUFDakIsR0FBRyxFQUFFLFVBQVMsR0FBRztnQkFDYixNQUFNLENBQUMsR0FBRyxZQUFZLE9BQU8sQ0FBQyxDQUFDO2dCQUMvQixNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsS0FBSyxJQUFJLEVBQUUscUJBQXFCLENBQUMsQ0FBQztnQkFDeEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEtBQUssVUFBVSxFQUFFLGVBQWUsQ0FBQyxDQUFDO2dCQUN0RCxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUM7Z0JBQy9DLElBQUksRUFBRSxDQUFDO1lBQ1gsQ0FBQztTQUNKLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGtEQUFrRCxFQUFFLFVBQVUsSUFBSTtRQUNqRSxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVMsR0FBRztZQUNyQixNQUFNLENBQUMsR0FBRyxZQUFZLE9BQU8sQ0FBQyxDQUFDO1lBQy9CLElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw4REFBOEQsRUFBRSxVQUFVLElBQUk7UUFDN0UsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQixNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLENBQUM7UUFDM0MsSUFBSSxFQUFFLENBQUM7SUFDWCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InByb2dyYW0tc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
