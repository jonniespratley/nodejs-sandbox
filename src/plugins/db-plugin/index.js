'use strict';
const debug = require('debug');
const level = require('level');
const sublevel = require('level-sublevel');

module.exports = function (dbName) {
    var log = debug('db');
    var db = sublevel(
        level(dbName, {
            valueEncoding: 'json'
        })
    );


    db.createReadStream()
        .on('data', function (data) {
            log(data.key, '=', data.value);
        })
        .on('error', function (err) {
            log('Oh my!', err);
        })
        .on('close', function () {
            log('Stream closed');
        })
        .on('end', function () {
            log('Stream closed');
        });

    return db;
};
