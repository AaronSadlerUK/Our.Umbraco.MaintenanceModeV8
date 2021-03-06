var gulp = require('gulp'),
    watch = require('gulp-watch');

var src = [
    './Our.Umbraco.MaintenanceMode/App_Plugins'],
    dest = './MaintenanceMode.Site/App_Plugins';

gulp.task('monitor', function () {
    for (var i = 0; i < src.length; i++) {
        watch(src[i] + '/**/*', { ignoreInitial: false, verbose: true })
            .pipe(gulp.dest(dest));
    }

});

gulp.task('default', ['monitor']);