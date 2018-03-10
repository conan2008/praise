var gulp = require('gulp');
var bable = require('gulp-babel');
var swig = require('gulp-swig');
var watch = require('gulp-watch');

var paths = {
    scripts: {
        src: './src/**/*.js',
        dest: 'build/src'
    }
}

gulp.task('app', function() {
        gulp.src(paths.scripts.src)
        .pipe(bable())
        .pipe(gulp.dest(paths.scripts.dest));
});

gulp.task('watch', function() {
    gulp.watch(['./src/**/*.js'], ['app',]);
})

gulp.task('default',['app','watch']);
