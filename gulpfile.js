var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();




gulp.task('watch',['browserSync', 'sass'], function(){
  gulp.watch('app/css/*.sass', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
})

gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})


gulp.task('sass', function(){
  return gulp.src('./app/css/main.sass')
  .pipe(sass())
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({
    stream: true
  }))
})