var gulp = require('gulp');
var gutil = require('gulp-util');
var fork = require('child_process').fork;

gulp.task('test', function (callback) {
  var child = fork(__dirname + '/server.js');
  child.on('message', function (m) {
    if (m.started) {
      gutil.log('Opening ' + m.url);
      require('open')(m.url);
    }
  });
  child.on('error', callback);
  child.on('exit', function () {
    callback(null);
  });
});

gulp.task('default', ['test']);
