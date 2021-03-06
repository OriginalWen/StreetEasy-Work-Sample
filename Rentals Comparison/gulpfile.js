var gulp   = require('gulp');
// require other packages
var concat = require('gulp-concat');
var cssmin = require('gulp-minify-css');	//gulp-clean-css
var rename = require("gulp-rename");
var sass   = require('gulp-sass');
var uglify = require('gulp-uglify');

// default task
gulp.task('default', ['scripts', 'styles', 'watch']);

// scripts task
gulp.task('scripts', function() {
  return gulp.src('./src/js/*.js')  //glob
    .pipe(concat('app.js'))			//can go to gulpjs to see all the plugins
    .pipe(gulp.dest('./dist/js/'))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/js/'));
});

// styles task
gulp.task('styles', function() {
  return gulp.src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css/'))
    .pipe(cssmin())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/css/'));
});

// watch task
gulp.task('watch', function() {
  gulp.watch('./src/js/*.js', ['scripts']);		//watch(glob,  )
  gulp.watch('./src/sass/*.scss', ['styles']);
});