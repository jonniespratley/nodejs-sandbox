'use strict';
const gulp = require('gulp');
const jsdoc = require('gulp-jsdoc3');
const gulpSequence = require('gulp-sequence');

gulp.task('docs', function (cb) {
    var config = require(require('path').resolve(__dirname, '../jsdoc.conf.json'));
    gulp.src(['README.md', './release/**/*.js'], {read: false})
        .pipe(jsdoc(config, cb));
});

gulp.task('jsdocs', gulpSequence( 'clean', 'compile', 'docs'));
