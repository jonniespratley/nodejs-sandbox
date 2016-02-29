'use strict';
const express = require('express');
const serveStatic = require('serve-static');
const flash = require('connect-flash');
const path = require('path');
const ejs = require('ejs');

module.exports = function(app, BlogService, BlogController) {
    var blog = express();
    var blogAdmin = express();

    blog.set('views', path.resolve(__dirname, './views'));
    blog.set('view engine', 'ejs');
    blog.engine('html', ejs.renderFile);

    blog.use('/blog', serveStatic(path.resolve(__dirname, './views')));
    blog.use(flash());

    blog.get('/', BlogController.renderPosts);
    blog.get('/posts/:id', BlogController.renderPost);
    blog.route('/:id?').get(BlogController.get);

    blogAdmin.route('/:id?')
        .get(BlogController.get)
        .put(BlogController.put)
        .post(BlogController.post)
        .delete(BlogController.remove);

    app.use('/blog', blog);
    blog.use('/admin', blogAdmin);

    return blog;
};
