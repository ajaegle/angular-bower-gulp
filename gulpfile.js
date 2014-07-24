var gulp = require('gulp'),
   uglify = require('gulp-uglify'),
   jshint = require('gulp-jshint'),
   concat = require('gulp-concat');
var notify = require('gulp-notify');
var webserver = require('gulp-webserver');

gulp.task('minify', function () {
   gulp.src('app/js/app.js')
      .pipe(uglify())
      .pipe(gulp.dest('build'))
});


gulp.task('js', function () {
   return gulp.src('app/js/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'))
      .pipe(uglify())
      .pipe(concat('app.js'))
      .pipe(gulp.dest('build/js/'));
	    // .pipe(notify('js task completed.'));
});

gulp.task('html', function() {
  return gulp.src('app/**/*.html')
    .pipe(gulp.dest('build'));
});

gulp.task('webserver', function() {
  gulp.src('build')
    .pipe(webserver({
      livereload: true
    }));
});
