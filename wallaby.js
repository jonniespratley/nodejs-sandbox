module.exports = function () {
    return {
        files: [
            'src/**/*.js',
            'src/plugins/**/*.js'
        ],

        tests: [
            'src/**/*-spec.js',
            'test/**/*-spec.js'
        ],

        env: {
            type: 'node'
        }
    };
};