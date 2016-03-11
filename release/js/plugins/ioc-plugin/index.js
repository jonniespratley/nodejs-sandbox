/*
in the application:

var app = express();
var plugin = require('thePlugin')();
app[plugin.method](plugin.route, plugin.handler);
*/
module.exports = function plugin() {
    return {
        method: 'get',
        route: '/newRoute',
        handler: function (req, res) {
            console.log('plugin handler', req.url);
            res.status(200).send({ message: 'Hello' });
        }
    };
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL2lvYy1wbHVnaW4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztFQU1FO0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNmLE1BQU0sQ0FBQztRQUNMLE1BQU0sRUFBRSxLQUFLO1FBQ2IsS0FBSyxFQUFFLFdBQVc7UUFDbEIsT0FBTyxFQUFFLFVBQVMsR0FBRyxFQUFFLEdBQUc7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztRQUMzQyxDQUFDO0tBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQyIsImZpbGUiOiJwbHVnaW5zL2lvYy1wbHVnaW4vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
