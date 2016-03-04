'use strict';
const gulp = require('gulp');
const path = require('path');
const _ = require('lodash');
const ts = require('gulp-typescript');
const merge = require('merge2');
const concat = require('gulp-concat');
const rimraf = require('gulp-rimraf');

const sourcemaps = require('gulp-sourcemaps');
const $ = require('gulp-load-plugins')({
  lazy: true
});
const mocha = require('gulp-mocha');
const istanbul = require('gulp-istanbul');
const coveralls = require('gulp-coveralls');


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

var tsProject = ts({
  noImplicitAny: true,
  out: 'output.js',
  "target": "ES6",
  "module": "commonjs",
  "noImplicitAny": true,
  "removeComments": true,
  "preserveConstEnums": true
});


gulp.task('typescript', function() {
  var tsResult = gulp.src(config.tsSrc)
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject));

  return merge([
    tsResult.dts.pipe(gulp.dest('release/definitions')),
    tsResult.js
    //.pipe(concat('output.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('release/js'))
  ]);
});



gulp.task('watch-coverage', ['pre-test'], function() {
  return gulp.src(config.specs)
    .pipe(mocha({
      read: false
    }))
    .pipe(istanbul.writeReports());
});

gulp.task('watch', function() {
  gulp.watch(config.tsSrc, ['typescript']);
  gulp.watch(config.specs, ['mocha']);
});


gulp.task('mocha', function() {
  return gulp.src(config.specs)
    .pipe(mocha({
      read: false
    }));
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



gulp.task('coveralls', function() {
  return gulp.src('./coverage/lcov.info')
    .pipe(coveralls());
});

gulp.task('pre-test', ['typescript'], function() {
  return gulp.src(config.jsSrc)
    .pipe(istanbul({
      includeUntested: true,
    }))
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], function() {
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

gulp.task('compile', ['clean', 'typescript']);
gulp.task('default', ['compile', 'test']);
