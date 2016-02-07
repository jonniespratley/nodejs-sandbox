'use strict';
const level = require('level');
const sublevel = require('level-sublevel');

module.exports = function(dbName, Logger) {
  var log = Logger.getLogger('db');


  var db = sublevel(
    level(dbName, {
      valueEncoding: 'json'
    })
  );

  db.createReadStream()
    .on('data', function(data) {
      log(data.key, '=', data.value);
    })
    .on('error', function(err) {
      log('Oh my!', err);
    })
    .on('close', function() {
      log('Stream closed');
    })
    .on('end', function() {
      log('Stream closed');
    });

  return db;
};
