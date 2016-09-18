'use strict';

/* Modules */
var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');
var clean = require('gulp-clean');
var rename = require('gulp-rename');
var compass = require('gulp-compass');
var webpack = require('webpack-stream');
var webserver = require('gulp-webserver');

/* Variables */
var prodEnv = "./dist";
var devEnv = "./src";

/* AUTOMATED LAUNCH */
gulp.task('default', gulpSequence(
  'clean', 'html', 'sass', 'webpack',
  ['webserver', 'watcher']
));

/* Clean production directory */
gulp.task('clean', function(){
  return gulp.src([prodEnv + '/*', '!'+ prodEnv +'/bower_components', '!'+ prodEnv +'/bower_components/*'])
  .pipe(clean());
});;

/* HTML: Move html files */
gulp.task('html', function(){
  return gulp.src([devEnv +"/index.html", devEnv +"/**/*.html"])

    /* Compatibility Unix and Windows */
    .pipe(rename(function(path) {
      var singleRoute = path.dirname;
      var pos = singleRoute.indexOf("\/");
      if (pos < 0) { pos = singleRoute.indexOf("\\"); }
      var finalPath = singleRoute.substring(0, pos);
      path.dirname = finalPath;
    }))

    /* Move files */
    .pipe(gulp.dest(prodEnv));
})

/* CSS: Parse all SCSS files */
gulp.task('sass', function(){
  return gulp.src(prodEnv +'/styles')
    .pipe(compass({
      css: prodEnv +'/styles',
      sass: devEnv +'/sass',
      comments: false
    }));
});

/* JS: Execute webpack to compress all JS in 1 single file */
gulp.task('webpack', function(){
  return gulp.src([devEnv +'/**/*.js', '!'+ devEnv +'/API/**/*.js'])
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest(prodEnv));
})

/* Watch changes on DEV folder, and move updated files to PROD */
gulp.task('watcher', function(){
  gulp.watch([devEnv +'/**/*.html'], ['html']);
  gulp.watch([devEnv +'/sass/**/*.scss'], ['sass']);
  gulp.watch([devEnv +'/**/*.js', '!'+ devEnv +'/API/**/*.js'], ['webpack']);
});

/* Launch webserver */
gulp.task('webserver', function() {
  return gulp.src(prodEnv)
    .pipe(webserver({
      host: 'localhost',
      port: '8080',
      livereload: true,
      open: true
    }));
});
