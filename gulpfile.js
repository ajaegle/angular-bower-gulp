var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var webserver = require('gulp-webserver');
var mainbowerfiles = require('main-bower-files');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');

var gulpFilter = require('gulp-filter');

var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var filelog = require('gulp-filelog');

var rimraf = require('gulp-rimraf');

gulp.task('clean', function() {
  return gulp.src('build/*', { read: false })
    .pipe(rimraf());
});

gulp.task('bower-js', function () {
  var files = mainbowerfiles( { debugging: false, checkExistence: true } );

  return gulp.src(
      files,
      { base: './bower_components/' }
    )
    .pipe(gulpFilter('**/*.js'))
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('build/js/'));
});

gulp.task('bower-css', function () {
  var files = mainbowerfiles( { debugging: false, checkExistence: true } );
  var cssFilter = gulpFilter('**/*.css');
  var remainingFilter = gulpFilter(['**', '!**/*.css', '!**/*.js']);

  return gulp.src(
      files,
      { base: './bower_components/' }
    )
    .pipe(cssFilter)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('build/style/'))
    .pipe(cssFilter.restore())
    .pipe(remainingFilter)
    //.pipe(filelog())
    .pipe(gulp.dest('build/style/'))
    .pipe(remainingFilter.restore());
});

gulp.task('bower', ['bower-js', 'bower-css']);

gulp.task('js', function () {
   return gulp.src(['app/base/app.js','app/**/*.js'])
      .pipe(plumber({errorHandler: notify.onError("<%= error.message %>")}))
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
  gulp.watch('app/**/*.js', ['js']);
  gulp.watch('bower_components', ['bower']);
});
