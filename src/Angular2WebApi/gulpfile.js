/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

gulp.task('copy-libs', function () {
    gulp.src('./node_modules/angular2/**/*.js')
        .pipe(gulp.dest('./wwwroot/lib/angular2'));
    gulp.src('./node_modules/es6-promise/**/*.js')
        .pipe(gulp.dest('./wwwroot/lib/es6-promise'));
    gulp.src('./node_modules/zone.js/**/*.js')
        .pipe(gulp.dest('./wwwroot/lib/zone.js'));
    gulp.src('./node_modules/systemjs/**/*.js')
        .pipe(gulp.dest('./wwwroot/lib/systemjs'));
    gulp.src('./node_modules/reflect-metadata/**/*.js')
        .pipe(gulp.dest('./wwwroot/lib/reflect-metadata'));
    gulp.src('./node_modules/es6-shim/**/*.js')
        .pipe(gulp.dest('./wwwroot/lib/es6-shim'));
    gulp.src('./node_modules/rxjs/**/*.js')
        .pipe(gulp.dest('./wwwroot/lib/rxjs'));
});


gulp.task('default', ['copy-libs']);