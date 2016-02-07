'use strict';
const express = require('express');

module.exports = function(program) {

  const app = program.get('app');
  program.inject(require('./blog-service'));
  program.inject(require('./blog-controller'));
  //  program.register('BlogService', require('./blog-service'));
  //  program.register('BlogController', require('./blog-controller'));

  //  const BlogController = program.get('BlogController');

  //  var log = Logger.getLogger('blog-plugin');
  var blog = express();
  var blogAdmin = new express.Router();

  blog.route('/:id?')
    .all(function(req, res, next) {
      console.log('middleware', req.method, req.url);
      next();
    })
    .get(BlogController.get)
    .put(BlogController.put)
    .post(BlogController.post)
    .delete(BlogController.delete);

  blogAdmin.route('/').all(function(req, res, next) {
    console.log('admin middleware', req.method, req.url);
    next();
  });



  app.use('/blog', blog);
  blog.use('/admin', blogAdmin);

  console.log(app.path());
  console.log(blog.path());
  console.log(blogAdmin.path());
};
