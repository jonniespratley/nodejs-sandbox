'use strict';
const express = require('express');

module.exports = function (program) {

    var app = program.get('app');
    // program.inject(require('./blog-service'));
    // program.inject(require('./blog-controller'));
    program.factory('BlogService', require('./blog-service'));
    program.factory('BlogController', require('./blog-controller'));

    const BlogController = program.get('BlogController');

    //  var log = Logger.getLogger('blog-plugin');
    var blog = express();
    var blogAdmin = express();

    blog.route('/:id?')
        .all(function (req, res, next) {
            console.log('middleware', req.method, req.url);
            next();
        })
        .get(BlogController.get);

    blogAdmin.route('/:id?').all(function (req, res, next) {
            console.log('admin middleware',
                req.params.id,
                req.method, req.url);
            next();
        })
        .get(function (req, res, next) {
            if(req.params.id){
                return BlogController.get(req, res, next);
            }
            res.status(200).json({
                message: 'admin'
            });
        })
        .put(BlogController.put)
        .post(BlogController.post)
        .delete(BlogController.remove);


    app.use('/blog', blog);
    blog.use('/admin', blogAdmin);

    console.log(app.path());
    console.log(blog.path());
    console.log(blogAdmin.path());


};
