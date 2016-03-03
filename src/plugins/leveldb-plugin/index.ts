'use strict';
const level = require('level');
const sublevel = require('level-sublevel');
const Logger = require('../logger').default;

export default function DB(dbName) {
    if (!dbName) {
        dbName = 'db';
    }
    var log = new Logger('db-plugin').getLogger(dbName);
    var db = sublevel(
        level(dbName, {
            valueEncoding: 'json'
        })
    );

    return db;
};
