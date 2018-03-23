var gulp = require('gulp'),
uglify = require('gulp-uglify'),
concat = require('gulp-concat');
babel = require('gulp-babel');
minifycss = require('gulp-minify-css');
sass = require('gulp-sass')

gulp.task('js', function () {
return gulp.src('src/js/*.js')
  .pipe(concat('app.min.js'))
  .pipe(babel({presets: ['env']}))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js/'))
});

gulp.task('css',function() {
  return gulp.src(['src/css/*.css','src/sass/*.scss'])
    .pipe(sass())
    .pipe(concat('main.min.css'))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css/'))
})

gulp.task('minifica-todo',['css','js'])

gulp.task('watch', function(){
  gulp.watch(['src/css/*.css', 'src/sass/*.scss'], ['css']);
  gulp.watch('src/js/*.js', ['js']);
})