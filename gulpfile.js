'use strict';
const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');
const path = require('path');
const _ = require('lodash');

const rimraf = require('gulp-rimraf');

const $ = require('gulp-load-plugins')({
  lazy: true
});

const config = {
  tsSrc: [
    'src/**/*.ts',
    'test/**/*.ts'
  ],
  jsSrc: [
    '!release/**/*-spec.js',
    'release/**/*.js'
  ],
  specs: [
    //'src/**/*-spec.js',
    'release/**/*-spec.js'
  ]
};

global.config = config;

/**
 * Log a message or series of messages using chalk's blue color.
 * Can pass in a string, object or array.
 */
function log(msg) {
  if (typeof(msg) === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        $.util.log($.util.colors.blue(msg[item]));
      }
    }
  } else {
    $.util.log($.util.colors.blue(msg));
  }
}

/**
 * Show OS level notification using node-notifier
 */
function notify(options) {
  var notifier = require('node-notifier');
  var notifyOptions = {
    sound: 'Bottle',
    contentImage: path.join(__dirname, 'gulp.png'),
    icon: path.join(__dirname, 'gulp.png')
  };
  _.assign(notifyOptions, options);
  notifier.notify(notifyOptions);
}



gulp.task('watch-coverage', ['pre-test'], function() {
  return gulp.src(config.specs)
    .pipe(mocha({
      read: false
    }))
    .pipe(istanbul.writeReports());
});

gulp.task('watch', function() {
  gulp.watch(config.tsSrc, ['typescript']);
  gulp.watch(config.specs, ['watch-coverage']);
});



gulp.task('clean', function() {
  return gulp.src([
      'data',
      'db',
      'docs',
      'coverage',
      'release',
      'test-db'
    ], {
      read: false
    })
    .pipe(rimraf());
});



gulp.task('default', gulpSequence('compile', 'test'));
try {
  require('require-dir')('tasks');
} catch (e) {

} finally {

}
