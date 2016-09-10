'use strict';
const gulp = require('gulp');
const ts = require('gulp-typescript');
const concat = require('gulp-concat');

const merge = require('merge2');

const sourcemaps = require('gulp-sourcemaps');
const $ = require('gulp-load-plugins')({
  lazy: true
});


var config = global.config;

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

gulp.task('compile', ['clean', 'typescript']);
