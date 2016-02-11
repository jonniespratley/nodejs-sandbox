"use strict";
module.exports = function(Logger, BlogService) {
  const log = Logger.getLogger('blog-controller');

  class BlogController {
    constructor() {
      console.log('This is the constructor.');
    }

    index(req, res, next) {
      log('index', req.body);
      res.render('index');
    }

    renderPosts(req, res, next) {
      log('posts', req.url);
      res.render('posts');
    }

    renderPost(req, res, next) {
      log('post', req.url);
      res.render('post');
    }

    get(req, res, next) {
      BlogService.get(req.params.id, (err, result) => {
        if (err) {
          res.status(404).json(err);
        }
        res.status(200).json(result);
      });
    }

    put(req, res, next) {
      log('put', req.body);
      BlogService.put(req.body, (err, result) => {
        if (err) {
          res.status(404).json(err);
        }
        res.status(200).json(result);
      });
    }

    post(req, res, next) {
      log('post', req.body);
      BlogService.post(req.body, (err, result) => {
        if (err) {
          res.status(404).json(err);
        }
        res.status(201).json(result);
      });
    }

    remove(req, res, next) {
      log('remove', req.params.id);
      BlogService.remove(req.params.id, (err, result) => {
        if (err) {
          res.status(404).json(err);
        }
        res.status(200).json(result);
      });
    }
  }


  return BlogController;
};