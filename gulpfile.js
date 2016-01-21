var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', () => {
  gulp.src('./sass/**/*.{scss,sass}')
  .pipe(sass())
  .pipe(gulp.dest('./css'));
});
