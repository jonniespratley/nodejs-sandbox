'use strict';
const App = require('./app').default;
const DiContainer = require('./plugins/di-container').default;
class Program extends DiContainer {
    constructor(options) {
        super('program');
        this.app = new App(options);
        this.register('app', this.app);
        this.register('program', this);
        this.register('namespace', 'sandbox');
        this.register('dbName', 'db');
        this.register('tokenSecret', 'SHHH!');
        this.plugin('Logger', require('./plugins/logger'));
        this.plugin('db', require('./plugins/db-plugin'));
        if (options.run) {
            this.run(options.run);
        }
    }
    run(cb) {
        console.log('Program.run');
        if (cb) {
            cb(this);
        }
    }
    use(plugin) {
        console.log('Program.use');
        this.inject(plugin);
        return this;
    }
}
exports.Program = Program;
//# sourceMappingURL=program.js.map