var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  gulp.src('./public/stylesheets/sass/style.scss')
    .pipe(sass({
      outputStyle: 'compact'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./public/stylesheets/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./public/stylesheets/sass/**/*.scss', ['sass']);
});

gulp.task('default', function() {
  console.log('up and running');
});
