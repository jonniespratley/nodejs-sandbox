/*
in the application:
var app = express();
require('thePlugin')(app);
*/
module.exports = function plugin(app, namespace) {

  console.log('sandbox-plugin', 'namespace', namespace);

  return app;
};
