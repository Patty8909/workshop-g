var gulp = require('gulp'),
uglify = require('gulp-uglify'),
concat = require('gulp-concat');
babel = require('gulp-babel');

gulp.task('js', function () {
return gulp.src('src/js/*.js')
  .pipe(concat('app.min.js'))
  .pipe(babel({presets: ['env']}))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js/'))
});