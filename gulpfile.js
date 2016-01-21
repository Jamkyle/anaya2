var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', () => {
  gulp.src('./sass/bubble.scss')
  .pipe(sass())
    .pipe(gulp.dest('./css'));
});

gulp.task('default', ['sass'])
