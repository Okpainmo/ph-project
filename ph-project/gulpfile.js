// 'use strict';

// variables
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

// custom-hello task
gulp.task('hello', function (done) {
  console.log('hello from gulp');
  done();
});

// SCSS compilation task
function buildStyles() {
  return gulp
    .src('styles/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('styles/css'));
}

exports.buildStyles = buildStyles;

// autoprefixer task
exports.default = () =>
  gulp
    .src('styles/scss/**/*.scss')
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(gulp.dest('styles/css'));

// watch task
gulp.task('watch', function () {
  gulp.watch('styles/scss/**/*.scss', gulp.series('buildStyles'));
});
