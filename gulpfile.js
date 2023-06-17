const gulpfile = require('gulp');
const combine = require('gulp-scss-combine');
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));

function defaultTask(cb) {
  gulpfile
    .src(['src/**/*.scss']) // define a source files
    .pipe(combine()) // combine them based on @import and save it to stream
    .pipe(concat('style.scss')) // concat the stream output in single file
    .pipe(gulpfile.dest('style')); // save file to destination.
  gulpfile
    .src(['src/**/*.scss']) // define a source files
    .pipe(combine()) // combine them based on @import and save it to stream
    .pipe(concat('style.scss')) // concat the stream output in single file
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpfile.dest('css')); // save file to destination.
  cb();
}

exports.default = defaultTask;
