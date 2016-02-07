'use strict';
module.exports = function(db, Logger, tokenSecret) {
  var log = Logger.getLogger('blog-service');
  var posts = db.sublevel('posts');
  var BlogService = {};

  BlogService.savePost = function(post, callback) {
    log('post', user);
    posts.put(post.id, post, function(err, resp) {
      callback(err, resp);
    });
  };

  BlogService.getPost = function(id, callback) {
    log('getPost', id);
    posts.get(id, function(err, resp) {
      log('login.response', err, resp);
      callback(err, resp);
    });
  };

  return BlogService;
};
