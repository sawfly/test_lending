var gulp = require('gulp'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    concat_css = require('gulp-concat-css'),
    //connect = require('gulp-connect'),
    // autoprefixer = require('gulp-autoprefixer'),
    ngAnnotate = require('gulp-ng-annotate'),
    livereload = require('gulp-livereload'),
    http = require('http'),
    //st = require('st'),
    htmlmin = require('gulp-htmlmin'),
    // sourcemaps = require('gulp-sourcemaps'),
    // uglify = require('gulp-uglify'),
    minifyCss = require("gulp-minify-css"),
    //webserver = require('gulp-webserver'),
    clean = require('gulp-clean');//,
    //gulpNgConfig = require('gulp-ng-config');
var paths = {
    scripts: [
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        /*'node_modules/bootstrap-material-design/dist/js/material.min.js',
        'node_modules/bootstrap-material-design/dist/js/ripples.min.js',*/
        'node_modules/angular/angular.min.js',
        'node_modules/angular-route/angular-route.min.js',
        'node_modules/angular-cookies/angular-cookies.min.js',
        'node_modules/ng-file-upload/dist/ng-file-upload.min.js',
        /*'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angularjs-slider/dist/rzslider.min.js',
        'bower_components/ngGallery/src/js/ngGallery.js',
        'node_modules/angular-utils-pagination/dirPagination.js',
        'node_modules/socket.io-client/socket.io.js',
        'node_modules/angular-toastr/dist/angular-toastr.tpls.js',
        'node_modules/angular-socket-io/socket.js',
        'node_modules/angular-sanitize/angular-sanitize.min.js',
        'js/config.js',*/
        'js/app.js',
        'controllers/*.js'
    ],
    css: [
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
         /*'node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.min.css',
        'node_modules/bootstrap-material-design/dist/css/ripples.min.css',
        'node_modules/angular-toastr/dist/angular-toastr.min.css',
        'node_modules/angularjs-slider/dist/rzslider.min.css',
        'bower_components/ngGallery/src/css/ngGallery.css',*/
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
gulp.task('copyimg', function () {
    return gulp.src('images/*')
        .pipe(gulp.dest('public/img'));
});
gulp.task('clean', function () {
    return gulp.src('public', {read: false})
        .pipe(clean());
});
/*gulp.task('config', function () {
    gulp.src('config.json')
    // .pipe(gulpNgConfig('app.js'));
        .pipe(gulpNgConfig('airbasketApp.config'))
        .pipe(gulp.dest('./js/'));
});*/
gulp.task('default', [/*'config', */'scripts', 'css', 'html', 'copyimg']);
/*gulp.task('serve', function () {
    return gulp
        .src('dist')
        .pipe(webserver({
            port: 8080,
            livereload: true,
            open: 'http://localhost:8080',
            fallback: 'index.html',
            proxies: [
                {
                    source: '/extproducts', target: 'http://airbasket.api/extproducts'
                },
                {
                    source: '/categories', target: 'http://airbasket.api/categories'
                },
                {
                    source: '/good/find', target: 'http://airbasket.api/good/find'
                },
                {
                    source: '/good', target: 'http://airbasket.api/customer/good'
                },
                {
                    source: '/users', target: 'http://airbasket.api/users'
                },
                {
                    source: '/customer/order', target: 'http://airbasket.api/customer/order'
                },
                {
                    source: '/customer', target: 'http://airbasket.api/customer'
                },
                {
                    source: '/traveler', target: 'http://airbasket.api/traveler'
                },
                {
                    source: '/traveler/order', target: 'http://airbasket.api/traveler/order'
                },
                {
                    source: '/login', target: 'http://airbasket.api/login'
                },
                {
                    source: '/register', target: 'http://airbasket.api/register'
                },
                {
                    source: '/order', target: 'http://airbasket.api/order'
                }
            ]
        }));
});*/
gulp.task('watch', ['default'/*, 'serve'*/], function () {
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.css, ['css']);
    gulp.watch(paths.html, ['html']);
    livereload.listen();
});
/*gulp.task('prod', function () {
    gulp.src(paths.html)
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
    gulp.src(paths.css)
        .pipe(concat_css('style.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('dist'));
    gulp.src(paths.scripts)
        .pipe(concat('app.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
});*/