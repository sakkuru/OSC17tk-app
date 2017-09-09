var gulp = require('gulp');
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('build', function() {
    var p = typescript.createProject('./tsconfig.json');
    return gulp.src('./ts/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript({}))
        .js
        .pipe(sourcemaps.write('.', { sourceRoot: '../ts' }))
        .pipe(gulp.dest('./bin'));
});