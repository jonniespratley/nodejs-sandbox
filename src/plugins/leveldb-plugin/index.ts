'use strict';
const levelup = require('levelup');
//const sublevel = require('level-sublevel');
const Logger = require('../logger').default;
//const leveldb = require('leveldb');

export default function DB(dbName) {

   // leveldb.open("./db", { create_if_missing: true }, onOpen);
    /*


     function onOpen(err, db) {
     db = db;
     }
     */
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
