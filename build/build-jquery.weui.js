var path = require('path');
var gulp = require('gulp');
var less = require('gulp-less');
var nano = require('gulp-cssnano');
var postcss = require('gulp-postcss');
var rename = require('gulp-rename');
var autoprefixer = require('autoprefixer');
var comments = require('postcss-discard-comments');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ext_replace = require('gulp-ext-replace');

gulp.task('js', function () {
    gulp.src([
            '../src/jquery-weui/js/jquery-extend.js',
            '../src/jquery-weui/js/template7.js',
            '../src/jquery-weui/js/hammer.js',
            '../src/jquery-weui/js/modal.js',
            '../src/jquery-weui/js/toast.js',
            '../src/jquery-weui/js/action.js',
            '../src/jquery-weui/js/pull-to-refresh.js',
            '../src/jquery-weui/js/infinite.js',
            '../src/jquery-weui/js/tab.js',
            '../src/jquery-weui/js/search-bar.js',
            '../src/jquery-weui/js/device.js',
            '../src/jquery-weui/js/picker.js',
            '../src/jquery-weui/js/select.js',
            '../src/jquery-weui/js/calendar.js',
            '../src/jquery-weui/js/datetime-picker.js',
            '../src/jquery-weui/js/city-data.js',
            '../src/jquery-weui/js/city-picker.js',
            '../src/jquery-weui/js/popup.js',
            '../src/jquery-weui/js/notification.js',
            '../src/jquery-weui/js/toptip.js',
            '../src/jquery-weui/js/slider.js',
            '../src/jquery-weui/js/swipeout.js'
        ])
        .pipe(concat({
            path: 'jquery-weui.js'
        }))
        .pipe(gulp.dest('../src/assets/js'))
});



gulp.task('watch', function() {
    gulp.watch('../src/jquery-weui/js/**/*.js', ['js']);
});



gulp.task("default", ['watch','js']);
