'use strict';
module.exports = function(db, Logger) {

  var log = Logger.getLogger('blog-service');
  var posts = db.sublevel('posts');
  var BlogService = {};

  BlogService.post = function(post, callback) {
    log('post', post);
    post.id = 'post-' + Date.now();
    posts.put(post.id, post, function(err, resp) {
      callback(err, resp);
    });
  };


  BlogService.put = function(post, callback) {
    log('post', post);
    posts.put(post.id, post, function(err, resp) {
      callback(err, resp);
    });
  };

  BlogService.get = function(id, callback) {
    log('getPost', id);
    posts.get(id, function(err, resp) {
      log('login.response', err, resp);
      callback(err, resp);
    });
  };


  BlogService.remove = function(id, callback) {
    log('remove', id);
    posts.del(id, function(err, resp) {
      log('login.response', err, resp);
      callback(err, resp);
    });
  };


  return BlogService;
};
