var gulp = require('gulp');
gulp.task('default', function(){
    console.log('hello world, this is a gulp-test');
});


var changed = require('gulp-changed');
var minifyHTML = require('gulp-minify-html');

gulp.task('htmlpage', function(){
    var htmlSrc = './src_exercise/*.html',
    htmlDst = '.build';

    gulp.src(htmlSrc)
        .pipe(changed(htmlDst))
        .pipe(minifyHTML())
        .pipe(gulp.dest(htmlDst));

});
