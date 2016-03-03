/*
in the application:
var app = express();
require('thePlugin')(app);
*/
module.exports = function plugin(app, namespace) {

  console.log('app-plugin', 'namespace', namespace);

  app.route('/newRoute?/:id?')
    .all(function(req, res, next) {
      console.log('app-plugin middleware', req.method, req.url);
      next();
    })
    .get(function(req, res, next) {
      res.status(200).json({
        message: 'Welcome'
      });
    })
    .put(function(req, res, next) {
      res.status(200).json({
        message: 'Updated'
      });
    })
    .post(function(req, res, next) {
      res.status(201).json({
        message: 'Saved'
      });
    })
    .delete(function(req, res, next) {
      res.status(200).json({
        message: 'Removed'
      });
    });
};
