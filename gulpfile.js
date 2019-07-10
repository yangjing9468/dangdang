const gulp = require('gulp');
const watch = require('gulp-watch');
const minihtml = require('gulp-minify-html');

gulp.task('uglifyhtml', () => {
    return gulp.src('src/*.html')
        .pipe(minihtml())
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', function() {
    watch(['src/*.html'], gulp.parallel('uglifyhtml'));
});