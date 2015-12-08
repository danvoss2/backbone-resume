var gulp = require('gulp'),
    concat = require('gulp-concat'),
    requirejs = require('gulp-requirejs'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify');

gulp.task('css', function() {
  return gulp.src(['./bower_components/bootstrap/dist/css/bootstrap.min.css', './public/css/style.css'])
    .pipe(concat('all.css'))
    .pipe(gulp.dest('./public/css/'))
    .pipe(notify({ message: 'CSS task complete' }));
});

gulp.task('scripts', function() {
    requirejs({
        baseUrl: './public/js/',
        name: 'main',
        out: './public/js/main.min.js',
        mainConfigFile: './public/js/main.js'/*,
        paths: {
            'jquery': 'libs/jquery-1.10.2.min',
            'jquery.maskedinput': 'libs/jquery.maskedinput',
            'mustache': 'libs/mustache'
        },
        shim: {
            'jquery.maskedinput': ['jquery']
        }*/
    })
    .pipe(gulp.dest('./'))
    .pipe(uglify())
    .pipe(gulp.dest('./'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('copy-scripts', function() {
  gulp.src(['./bower_components/jquery/dist/jquery.min.js', './bower_components/backbone/backbone-min.js', './bower_components/underscore/underscore-min.js', './bower_components/requirejs/require.js'])
   .pipe(gulp.dest('./public/js/libs/'));
});

gulp.task('watch', function() {
  // Watch CSS files, but don't watch the concatenated all.css file.
  gulp.watch(['./public/css/**/*.css', '!./public/css/all.css'], ['css']);
  // Watch JS files, but don't watch the final minified main.min.js file.
  gulp.watch(['./public/js/**/*.js', '!./public/js/main.min.js'], ['scripts']);
});

// Default Task
gulp.task('default', ['css', 'scripts', 'copy-scripts', 'watch']);