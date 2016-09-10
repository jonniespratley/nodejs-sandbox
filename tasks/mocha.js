'use strict';
const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');

const mocha = require('gulp-mocha');
const istanbul = require('gulp-istanbul');
const coveralls = require('gulp-coveralls');

gulp.task('coveralls', function() {
  return gulp.src('./coverage/lcov.info')
    .pipe(coveralls());
});


gulp.task('pre-test', function() {
  return gulp.src(config.jsSrc)
    .pipe(istanbul({
      includeUntested: true
    }))
    .pipe(istanbul.hookRequire());
});

gulp.task('mocha', function() {
  return gulp.src(config.specs)
    .pipe(mocha({
      read: false
    }));
});

gulp.task('coverage', function() {
  return gulp.src(config.specs)
    .pipe(mocha({
      read: false
    }))
    .pipe(istanbul.writeReports())
    .once('error', function() {
      process.exit(1);
    })
    .once('end', function() {
      process.exit();
    });
});

gulp.task('test', gulpSequence('compile', 'pre-test', 'coverage', 'coveralls'));
