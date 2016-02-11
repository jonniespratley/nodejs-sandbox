'use strict';
module.exports = function(Logger, BlogService) {
  var log = Logger.getLogger('blog-controller');

  var BlogController = function() {
    console.log('This is the constructor.');
    return this;
  };

  BlogController.prototype.index = function(req, res, next) {
    log('index', req.body);
    res.render('index');
  };

  BlogController.prototype.renderPosts = function(req, res, next) {
    log('posts', req.url);
    res.render('posts');
  };

  BlogController.prototype.renderPost = function(req, res, next) {
    log('post', req.url);
    res.render('post');
  };

  BlogController.prototype.get = function(req, res, next) {
    BlogService.get(req.params.id, function(err, result) {
      if (err) {
        res.status(404).json(err);
      }
      res.status(200).json(result);
    });
  };

  BlogController.prototype.put = function(req, res, next) {
    log('put', req.body);
    BlogService.put(req.body, function(err, result) {
      if (err) {
        res.status(404).json(err);
      }
      res.status(200).json(result);
    });
  };

  BlogController.prototype.post = function(req, res, next) {
    log('post', req.body);
    BlogService.post(req.body, function(err, result) {
      if (err) {
        res.status(404).json(err);
      }
      res.status(201).json(result);
    });
  };

  BlogController.prototype.remove = function(req, res, next) {
    log('remove', req.params.id);
    BlogService.remove(req.params.id, function(err, result) {
      if (err) {
        res.status(404).json(err);
      }
      res.status(200).json(result);
    });
  };


  return new BlogController();

};
