'use strict';
const debug = require('debug');
class Logger {
    static getLogger(category) {
        return debug(`${namespace}:${category}`);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=index.js.map