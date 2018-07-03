/**
 * @file
 * Defines gulp tasks to be run by Gulp task runner.
 */
/* eslint-env node */
var gulp = require('gulp'),
  sass = require('gulp-sass'),
  watch = require('gulp-watch'),
  notify = require("gulp-notify") ,
  prefixer = require('gulp-autoprefixer'),
  sourcemaps = require('gulp-sourcemaps'),
  cssmin = require('gulp-clean-css');
// Init Gulp
gulp.task('init', function() {
  'use strict';
  gulp.src('sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      sourceMap: true,
      errLogToConsole: true
    }).on('error', function(err) {
      notify().write(err);
    }))
    .pipe(prefixer())
    .pipe(cssmin())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets/css/'))
});
// Watch task //
gulp.task('watch',['init','sass'], function() {
  'use strict';
  gulp.watch('sass/**/*.scss', ['init']);
});
gulp.task('sass', function() {
  'use strict';
  return gulp.src("sass/*.scss").pipe(sass()).pipe(gulp.dest("assets/css"))
});