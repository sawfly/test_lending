var gulp = require('gulp'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    concat_css = require('gulp-concat-css'),
    ngAnnotate = require('gulp-ng-annotate'),
    livereload = require('gulp-livereload'),
    http = require('http'),
    htmlmin = require('gulp-htmlmin'),
    minifyCss = require("gulp-minify-css"),
    clean = require('gulp-clean');
var paths = {
    scripts: [
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/angular/angular.min.js',
        'node_modules/angular-route/angular-route.min.js',
        'node_modules/angular-cookies/angular-cookies.min.js',
        'node_modules/ng-file-upload/dist/ng-file-upload.min.js',
        'js/app.js',
        'controllers/*.js'
    ],
    css: [
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'css/*.css'
    ],
    html: ['views/**/*.html']
};
gulp.task('html', function () {
    return gulp.src(paths.html)
        .pipe(gulp.dest('public'))
        .pipe(livereload());
});
gulp.task('scripts', function () {
    return gulp.src(paths.scripts)
        .pipe(concat('app.js'))
        .pipe(ngAnnotate())
        .pipe(gulp.dest('public'))
        .pipe(livereload());
});
gulp.task('css', function () {
    return gulp.src(paths.css)
        .pipe(concat_css('style.css', {rebaseUrls: false}))
        .pipe(gulp.dest('public'))
        .pipe(livereload());
});
gulp.task('clean', function () {
    return gulp.src('public', {read: false})
        .pipe(clean());
});
gulp.task('default', ['scripts', 'css', 'html']);
