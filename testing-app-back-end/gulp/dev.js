var gulp    = require('gulp');
var nodemon = require('nodemon');

var constants = gulp.constants;

gulp.task('dev', ['lint'], function () {
    nodemon({
      script: constants.path.script
    })
});