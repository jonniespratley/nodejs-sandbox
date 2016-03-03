/*
in the application:
var app = express();
require('thePlugin')(app);
*/
module.exports = function plugin(app, namespace) {
    console.log('app-plugin', 'namespace', namespace);
    app.route('/newRoute?/:id?')
        .all(function (req, res, next) {
        console.log('app-plugin middleware', req.method, req.url);
        next();
    })
        .get(function (req, res, next) {
        res.status(200).json({
            message: 'Welcome'
        });
    })
        .put(function (req, res, next) {
        res.status(200).json({
            message: 'Updated'
        });
    })
        .post(function (req, res, next) {
        res.status(201).json({
            message: 'Saved'
        });
    })
        .delete(function (req, res, next) {
        res.status(200).json({
            message: 'Removed'
        });
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbnMvYXBwLXBsdWdpbi9pbmRleC50cyJdLCJuYW1lcyI6WyJwbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBSUU7QUFDRixNQUFNLENBQUMsT0FBTyxHQUFHLGdCQUFnQixHQUFHLEVBQUUsU0FBUztJQUU3Q0EsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsWUFBWUEsRUFBRUEsV0FBV0EsRUFBRUEsU0FBU0EsQ0FBQ0EsQ0FBQ0E7SUFFbERBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLGlCQUFpQkEsQ0FBQ0E7U0FDekJBLEdBQUdBLENBQUNBLFVBQVNBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLElBQUlBO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUQsSUFBSSxFQUFFLENBQUM7SUFDVCxDQUFDLENBQUNBO1NBQ0RBLEdBQUdBLENBQUNBLFVBQVNBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLElBQUlBO1FBQzFCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ25CLE9BQU8sRUFBRSxTQUFTO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQ0E7U0FDREEsR0FBR0EsQ0FBQ0EsVUFBU0EsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsSUFBSUE7UUFDMUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbkIsT0FBTyxFQUFFLFNBQVM7U0FDbkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDQTtTQUNEQSxJQUFJQSxDQUFDQSxVQUFTQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxJQUFJQTtRQUMzQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNuQixPQUFPLEVBQUUsT0FBTztTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUNBO1NBQ0RBLE1BQU1BLENBQUNBLFVBQVNBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLElBQUlBO1FBQzdCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ25CLE9BQU8sRUFBRSxTQUFTO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQ0EsQ0FBQ0E7QUFDUEEsQ0FBQ0EsQ0FBQyIsImZpbGUiOiJwbHVnaW5zL2FwcC1wbHVnaW4vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuaW4gdGhlIGFwcGxpY2F0aW9uOlxudmFyIGFwcCA9IGV4cHJlc3MoKTtcbnJlcXVpcmUoJ3RoZVBsdWdpbicpKGFwcCk7XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwbHVnaW4oYXBwLCBuYW1lc3BhY2UpIHtcblxuICBjb25zb2xlLmxvZygnYXBwLXBsdWdpbicsICduYW1lc3BhY2UnLCBuYW1lc3BhY2UpO1xuXG4gIGFwcC5yb3V0ZSgnL25ld1JvdXRlPy86aWQ/JylcbiAgICAuYWxsKGZ1bmN0aW9uKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgICBjb25zb2xlLmxvZygnYXBwLXBsdWdpbiBtaWRkbGV3YXJlJywgcmVxLm1ldGhvZCwgcmVxLnVybCk7XG4gICAgICBuZXh0KCk7XG4gICAgfSlcbiAgICAuZ2V0KGZ1bmN0aW9uKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgIG1lc3NhZ2U6ICdXZWxjb21lJ1xuICAgICAgfSk7XG4gICAgfSlcbiAgICAucHV0KGZ1bmN0aW9uKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgIG1lc3NhZ2U6ICdVcGRhdGVkJ1xuICAgICAgfSk7XG4gICAgfSlcbiAgICAucG9zdChmdW5jdGlvbihyZXEsIHJlcywgbmV4dCkge1xuICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oe1xuICAgICAgICBtZXNzYWdlOiAnU2F2ZWQnXG4gICAgICB9KTtcbiAgICB9KVxuICAgIC5kZWxldGUoZnVuY3Rpb24ocmVxLCByZXMsIG5leHQpIHtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgbWVzc2FnZTogJ1JlbW92ZWQnXG4gICAgICB9KTtcbiAgICB9KTtcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
