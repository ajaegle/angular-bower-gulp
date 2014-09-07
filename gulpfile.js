var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
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
  gulp.watch('app/js/**/*.js', ['js']);
});
