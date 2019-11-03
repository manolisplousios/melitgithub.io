
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

//compile sass files

gulp.task('sass', function(){
    return gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
});

//combine and concat javascript
//minify the js file

gulp.task('scripts',function(){
    return gulp.src('js/scripts/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js'))
});

//watch and autochange the files

gulp.task('watch',function(){
    gulp.watch('js/scripts/*.js', gulp.series('scripts'));
    gulp.watch('scss/*.scss', gulp.series('sass'));
});
