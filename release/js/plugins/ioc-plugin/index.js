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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbHVnaW5zL2lvYy1wbHVnaW4vaW5kZXgudHMiXSwibmFtZXMiOlsicGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0VBTUU7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2ZBLE1BQU1BLENBQUNBO1FBQ0xBLE1BQU1BLEVBQUVBLEtBQUtBO1FBQ2JBLEtBQUtBLEVBQUVBLFdBQVdBO1FBQ2xCQSxPQUFPQSxFQUFFQSxVQUFTQSxHQUFHQSxFQUFFQSxHQUFHQTtZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO1FBQzNDLENBQUM7S0FDRkEsQ0FBQ0E7QUFDSkEsQ0FBQ0EsQ0FBQyIsImZpbGUiOiJwbHVnaW5zL2lvYy1wbHVnaW4vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
