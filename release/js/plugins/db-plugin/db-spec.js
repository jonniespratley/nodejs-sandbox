'use strict';
var async = require('async');
var assert = require('assert');
var DB = require('./').default;
var db = null;
describe('db-plugin', function () {
    before(function (done) {
        db = new DB('data');
        var createUser = function (id, callback) {
            db.put('test-doc-' + id, { name: 'test doc ' + id }).then(function (resp) {
                callback(null, resp);
            });
        };
        async.times(5, function (n, next) {
            createUser(n, function (err, user) {
                next(err, user);
            });
        }, function (err, users) {
            console.log('created', users);
            done();
        });
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
        db.put('test-doc', { name: 'db-plugin' }).then(function (resp) {
            assert(resp);
            done();
        }).catch(function (err) {
            assert.fail(err);
            done();
        });
    });
    it('get() - should get key value', function (done) {
        db.get('test-doc').then(function (resp) {
            assert(resp);
            done();
        }).catch(function (err) {
            assert.fail(err);
            done();
        });
    });
    it('find(params) - should return array', function (done) {
        db.find().then(function (resp) {
            assert(resp);
            done();
        }).catch(function (err) {
            assert.fail(err);
            done();
        });
    });
    it('remove() - should remove key value', function (done) {
        db.remove('test-doc').then(function (resp) {
            assert(resp);
            done();
        }).catch(function (err) {
            assert.fail(err);
            done();
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbnMvZGItcGx1Z2luL2RiLXNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQyxJQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ2pDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztBQUdkLFFBQVEsQ0FBQyxXQUFXLEVBQUU7SUFFbEIsTUFBTSxDQUFDLFVBQVUsSUFBSTtRQUNqQixFQUFFLEdBQUcsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsSUFBSSxVQUFVLEdBQUcsVUFBVSxFQUFFLEVBQUUsUUFBUTtZQUNuQyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxFQUFFLEVBQUUsRUFBQyxJQUFJLEVBQUUsV0FBVyxHQUFHLEVBQUUsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtnQkFDbEUsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN6QixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQztRQUNGLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxFQUFFLElBQUk7WUFDNUIsVUFBVSxDQUFDLENBQUMsRUFBRSxVQUFVLEdBQUcsRUFBRSxJQUFJO2dCQUM3QixJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBO1lBQ25CLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxFQUFFLFVBQVUsR0FBRyxFQUFFLEtBQUs7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDOUIsSUFBSSxFQUFFLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0gsS0FBSyxDQUFDO1FBQ0YsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsbUJBQW1CLEVBQUU7UUFDcEIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2YsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsd0JBQXdCLEVBQUU7UUFDekIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2YsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsdUJBQXVCLEVBQUUsVUFBVSxJQUFJO1FBQ3RDLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtZQUN2RCxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDYixJQUFJLEVBQUUsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUc7WUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixJQUFJLEVBQUUsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7SUFHSCxFQUFFLENBQUMsOEJBQThCLEVBQUUsVUFBVSxJQUFJO1FBQzdDLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtZQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDYixJQUFJLEVBQUUsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUc7WUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixJQUFJLEVBQUUsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsb0NBQW9DLEVBQUUsVUFBVSxJQUFJO1FBQ25ELEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJO1lBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNiLElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRztZQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxvQ0FBb0MsRUFBRSxVQUFVLElBQUk7UUFDbkQsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJO1lBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNiLElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRztZQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUdQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InBsdWdpbnMvZGItcGx1Z2luL2RiLXNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5jb25zdCBhc3luYyA9IHJlcXVpcmUoJ2FzeW5jJyk7XG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKTtcbmNvbnN0IERCID0gcmVxdWlyZSgnLi8nKS5kZWZhdWx0O1xudmFyIGRiID0gbnVsbDtcblxuXG5kZXNjcmliZSgnZGItcGx1Z2luJywgZnVuY3Rpb24gKCkge1xuXG4gICAgYmVmb3JlKGZ1bmN0aW9uIChkb25lKSB7XG4gICAgICAgIGRiID0gbmV3IERCKCdkYXRhJyk7XG4gICAgICAgIHZhciBjcmVhdGVVc2VyID0gZnVuY3Rpb24gKGlkLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgZGIucHV0KCd0ZXN0LWRvYy0nICsgaWQsIHtuYW1lOiAndGVzdCBkb2MgJyArIGlkfSkudGhlbihmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3ApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGFzeW5jLnRpbWVzKDUsIGZ1bmN0aW9uIChuLCBuZXh0KSB7XG4gICAgICAgICAgICBjcmVhdGVVc2VyKG4sIGZ1bmN0aW9uIChlcnIsIHVzZXIpIHtcbiAgICAgICAgICAgICAgICBuZXh0KGVyciwgdXNlcilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyLCB1c2Vycykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NyZWF0ZWQnLCB1c2Vycyk7XG4gICAgICAgICAgICBkb25lKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGFmdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGIuY2xvc2UoKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgYmUgZGVmaW5lZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYXNzZXJ0KERCKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgY3JlYXRlIGluc3RhbmNlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBhc3NlcnQoZGIpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3B1dCgpIC0gc2hvdWxkIGRvIHB1dCcsIGZ1bmN0aW9uIChkb25lKSB7XG4gICAgICAgIGRiLnB1dCgndGVzdC1kb2MnLCB7bmFtZTogJ2RiLXBsdWdpbid9KS50aGVuKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICBhc3NlcnQocmVzcCk7XG4gICAgICAgICAgICBkb25lKCk7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGFzc2VydC5mYWlsKGVycik7XG4gICAgICAgICAgICBkb25lKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG5cbiAgICBpdCgnZ2V0KCkgLSBzaG91bGQgZ2V0IGtleSB2YWx1ZScsIGZ1bmN0aW9uIChkb25lKSB7XG4gICAgICAgIGRiLmdldCgndGVzdC1kb2MnKS50aGVuKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICBhc3NlcnQocmVzcCk7XG4gICAgICAgICAgICBkb25lKCk7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGFzc2VydC5mYWlsKGVycik7XG4gICAgICAgICAgICBkb25lKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaXQoJ2ZpbmQocGFyYW1zKSAtIHNob3VsZCByZXR1cm4gYXJyYXknLCBmdW5jdGlvbiAoZG9uZSkge1xuICAgICAgICBkYi5maW5kKCkudGhlbihmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAgICAgYXNzZXJ0KHJlc3ApO1xuICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBhc3NlcnQuZmFpbChlcnIpO1xuICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGl0KCdyZW1vdmUoKSAtIHNob3VsZCByZW1vdmUga2V5IHZhbHVlJywgZnVuY3Rpb24gKGRvbmUpIHtcbiAgICAgICAgZGIucmVtb3ZlKCd0ZXN0LWRvYycpLnRoZW4oZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICAgIGFzc2VydChyZXNwKTtcbiAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgYXNzZXJ0LmZhaWwoZXJyKTtcbiAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cblxufSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
