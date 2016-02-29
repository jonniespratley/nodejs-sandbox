'use strict';
const gulp = require('gulp');
const path = require('path');
const _ = require('lodash');
const ts = require('gulp-typescript');
const merge = require('merge2');
const concat = require('gulp-concat');
const rimraf = require('gulp-rimraf');
const sourcemaps = require('gulp-sourcemaps');
const $ = require('gulp-load-plugins')({lazy: true});

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
	module: 'commonjs',
	target: 'ES5'
});

gulp.task('scripts', function () {

	var tsResult = gulp.src('src/**/*.ts')
			.pipe(sourcemaps.init()) // This means sourcemaps will be generated
			.pipe(ts(tsProject));

	return merge([
		tsResult.dts.pipe(gulp.dest('release/definitions')),
		tsResult.js
				//.pipe(concat('output.js'))
				.pipe(sourcemaps.write())
				.pipe(gulp.dest('release/js'))
	]);
});

gulp.task('default', ['scripts']);


gulp.task('clean', function () {
	return gulp.src([
				'data',
				'db',
				'docs',
				'coverage',
				'release',
				'test-db'
			], {read: false})
			.pipe(rimraf());
});