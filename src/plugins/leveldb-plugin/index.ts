'use strict';
const levelup = require('levelup');
//const sublevel = require('level-sublevel');
const Logger = require('../logger').default;
//const leveldb = require('leveldb');

export default function DB(dbName, cb) {

  
     
    if (!dbName) {
        dbName = 'db';
    }
    var log = new Logger('db-plugin').getLogger(dbName);

    var db =   levelup(dbName, {
          valueEncoding: 'json'
      });
    //db.log = log;


    return db;
};
