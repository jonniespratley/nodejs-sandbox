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
    handler: function(req, res) {
      console.log('plugin handler', req.url);
      res.status(200).send({message: 'Hello'});
    }
  };
};
