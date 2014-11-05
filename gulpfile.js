var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var prefixer = require('gulp-autoprefixer');

var paths = {
	src: {
		base: './src',
		sass: './src/scss/**/*.scss'
	},
	build: {
		base: './build',
		css: './build/css',
		js: './build/js'
	}
};

gulp.task('build', ['sass'],function(){
	gulp.src(['./src/**/*.*', '!./src/scss/**/*.*'])
		.pipe(gulp.dest(paths.build.base));
	gulp.src(['./bower_components/**/*.*'])
		.pipe(gulp.dest(paths.build.base + '/bower_components'));
})

gulp.task('sass', function(){
	gulp.src(paths.src.sass)
		.pipe(sass())
		.pipe(prefixer())
		.pipe(gulp.dest(paths.build.css));
});


gulp.task('watch', function(){
	gulp.watch(paths.src.sass, ['sass']);
	gulp.watch(paths.src.base + '/*.*', ['build']);
});

gulp.task('default', ['watch']);