'use strict';
const levelup = require('levelup');
//const sublevel = require('level-sublevel');
const Logger = require('../logger').default;

export default function DB(dbName) {
    if (!dbName) {
        dbName = 'db';
    }
    var log = new Logger('db-plugin').getLogger(dbName);
    var db =   levelup(dbName, {
          valueEncoding: 'json'
      });

    return db;
};
