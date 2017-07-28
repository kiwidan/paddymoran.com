var gulp           = require('gulp');
var sass           = require('gulp-sass');
var autoprefixer   = require('gulp-autoprefixer');
var minifycss      = require('gulp-minify-css');
var rename         = require('gulp-rename');

var cssDest    = './css';
var scssSource = './scss/**/*.scss';

gulp.task('styles', function() {
    return gulp.src(scssSource)
               .pipe(sass({ errLogToConsole: true }))
               .pipe(autoprefixer())
               .pipe(rename({ suffix: '.min' }))
               .pipe(minifycss())
               .pipe(gulp.dest(cssDest));
});

gulp.task('watch', function() {
    return gulp.watch([scssSource], ['styles']);
});

gulp.task('default', ['styles']);
