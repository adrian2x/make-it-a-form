var gulp = require('gulp');
var sass = require('gulp-sass');

var paths = {
	sass: ['./css/**/*.scss']
};

gulp.task('sass', function(){
	gulp.src(paths.sass)
		.pipe(sass({
			errLogToConsole: true
		}))
		.pipe(gulp.dest('./css'));
});


gulp.task('watch', function(){
	gulp.src(paths.sass)
		.pipe(sass({
			errLogToConsole: true
		}))
		.pipe(gulp.dest('./css'));
});