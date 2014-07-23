var gulp = require('gulp'),
   uglify = require('gulp-uglify'),
   jshint = require('gulp-jshint'),
   concat = require('gulp-concat');
var notify = require('gulp-notify');

gulp.task('minify', function () {
   gulp.src('js/app.js')
      .pipe(uglify())
      .pipe(gulp.dest('build'))
});


gulp.task('js', function () {
   return gulp.src('js/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'))
      .pipe(uglify())
      .pipe(concat('app.js'))
      .pipe(gulp.dest('build'))
	  .pipe(notify('js task completed.'));
});
