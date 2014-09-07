var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var webserver = require('gulp-webserver');
var mainbowerfiles = require('main-bower-files');

gulp.task('minify', function () {
   gulp.src('app/js/app.js')
      .pipe(uglify())
      .pipe(gulp.dest('build'))
});

gulp.task('bower', function () {
  return gulp.src(
      mainbowerfiles( { debugging: true, checkExistence: true } ),
      { base: './bower_components/' }
    )
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('build/js/'));
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

gulp.task('webserver', ['html', 'js', 'bower'], function() {
  gulp.src('build')
    .pipe(webserver({
      livereload: true
    }));

  gulp.watch('app/**/*.html', ['html']);
  gulp.watch('app/js/**/*.js', ['js']);
  gulp.watch('bower_components', ['bower']);
});
