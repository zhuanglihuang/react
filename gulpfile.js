var gulp = require('gulp');
var gRename = require('gulp-rename');
var scss = require('gulp-scss');

// 我这里的需求是，把src目录下的main.scss文件编译成css文件，并且重命名之后存入指定的目录：style/css
gulp.task('scss', function () {
  gulp.src('src/main.scss')
    .pipe(scss())
    .pipe(gRename('mainCss.css'))
    .pipe(gulp.dest('style/css'), console.log("ok"));

});
gulp.task('watcher',function(){
  gulp.watch('src/main.scss',['scss'])
})
// gulp.task('default', function () {
//   // 将你的默认的任务代码放在这
//   alert('task')
// })