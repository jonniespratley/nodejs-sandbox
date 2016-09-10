'use strict';
var assert = require('assert');
var DB = require('./').default;
var db = null;
describe('leveldb-plugin', function () {
    before(function () {
        db = new DB('db');
    });
    after(function () {
        db.close();
    });
    it('should be defined', function () {
        assert(DB);
    });
    it('should create instance', function () {
        assert(db);
    });
    it('put() - should do put', function (done) {
        db.put('name', 'LevelUP', function (err) {
            if (err) {
                console.log('Ooops!', err);
                assert.fail(err);
                done();
            }
            done();
        });
    });
    it('createValueStream() - should get stream', function (done) {
        db.createValueStream().on('data', function (data) {
            assert(data);
            console.log('value=', data);
        });
        db.put('user-jonnie', 'jonnie', function (err) {
            done();
        });
    });
    it('get() - should get key value', function (done) {
        db.get('name', function (err, value) {
            assert(value);
            done();
        });
    });
    it('del() - should remove key value', function (done) {
        db.del('name', function (err, value) {
            assert(true);
            done();
        });
    });
    it('batch() - should do batch operation', function (done) {
        var ops = [
            { type: 'put', key: 'name', value: 'Yuri Irsenovich Kim' },
            { type: 'put', key: 'dob', value: '16 February 1941' },
            { type: 'put', key: 'spouse', value: 'Kim Young-sook' },
            { type: 'put', key: 'occupation', value: 'Clown' }
        ];
        db.batch(ops, function (err) {
            if (err) {
                assert.fail(err);
                done();
            }
            assert(true);
            done();
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL2xldmVsZGItcGx1Z2luL2RiLXNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLElBQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDakMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO0FBR2QsUUFBUSxDQUFDLGdCQUFnQixFQUFFO0lBRXZCLE1BQU0sQ0FBQztRQUNILEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDLENBQUMsQ0FBQztJQUNILEtBQUssQ0FBQztRQUNGLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG1CQUFtQixFQUFFO1FBQ3BCLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNmLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHdCQUF3QixFQUFFO1FBQ3pCLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNmLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHVCQUF1QixFQUFFLFVBQVUsSUFBSTtRQUN0QyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxHQUFHO1lBQ25DLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLElBQUksRUFBRSxDQUFDO1lBQ1gsQ0FBQztZQUNELElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx5Q0FBeUMsRUFBRSxVQUFVLElBQUk7UUFDeEQsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFVLElBQUk7WUFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsVUFBVSxHQUFHO1lBQ3pDLElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSxVQUFVLElBQUk7UUFDN0MsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsVUFBVSxHQUFHLEVBQUUsS0FBSztZQUUvQixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDZCxJQUFJLEVBQUUsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsaUNBQWlDLEVBQUUsVUFBVSxJQUFJO1FBQ2hELEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFVBQVUsR0FBRyxFQUFFLEtBQUs7WUFFL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2IsSUFBSSxFQUFFLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHFDQUFxQyxFQUFFLFVBQVUsSUFBSTtRQUNwRCxJQUFJLEdBQUcsR0FBRztZQUNOLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxxQkFBcUIsRUFBQztZQUN4RCxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUM7WUFDcEQsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFDO1lBQ3JELEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUM7U0FDbkQsQ0FBQztRQUVGLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLFVBQVUsR0FBRztZQUN2QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLElBQUksRUFBRSxDQUFDO1lBQ1gsQ0FBQztZQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNiLElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InBsdWdpbnMvbGV2ZWxkYi1wbHVnaW4vZGItc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9