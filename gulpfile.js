var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var webserver = require('gulp-webserver');
var mainbowerfiles = require('main-bower-files');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');

var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

gulp.task('minify', function () {
   gulp.src('app/js/app.js')
      .pipe(uglify())
      .pipe(gulp.dest('build'))
});

gulp.task('bower', function () {
  var files = mainbowerfiles( { debugging: false, checkExistence: true } );
  gutil.log('Processing', gutil.colors.cyan(files.length), 'bower files');

  return gulp.src(
      files,
      { base: './bower_components/' }
    )
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('build/js/'));
});

gulp.task('js', function () {
   return gulp.src('app/js/*.js')
      .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'))
      .pipe(jshint.reporter('fail'))
      .pipe(ngAnnotate())
      .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('app.js'))
      .pipe(sourcemaps.write())
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
