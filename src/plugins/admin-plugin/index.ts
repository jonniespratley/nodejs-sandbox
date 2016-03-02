'use strict';
const express = require('express');

/**
 * @class         AdminPlugin
 * @module        AdminPlugin
 * @constructor
 */
export default function AdminPlugin(app) {
    const Router = require('./router').default;

    console.log('Plugin Constructor');
    Router(app);
}
