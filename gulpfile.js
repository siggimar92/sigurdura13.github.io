'use strict';

var gulp = require('gulp'),
	babel = require('gulp-babel'),
	concat = require('gulp-concat'),
	gulpif = require('gulp-if'),
	livereload = require('gulp-livereload'),
	minifyCss = require('gulp-minify-css'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps');


var isProduction;
//console.log(process.argv[2]);
if (process.argv[2] === '--production') {
	isProduction = true;
} else {
	isProduction = false;
}
//console.log(isProduction);


// Uglifies js files
gulp.task('scripts', function () {
	return gulp.src('app/scripts/**/*.js')
		.pipe(sourcemaps.init())
		.pipe(babel())
		.pipe(concat('all.js'))
		.pipe(gulpif(isProduction, uglify()))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('build/scripts'))
		.pipe(livereload());
});

// Turns scss (sass) files into css.
gulp.task('styles', function () {
	return gulp.src('app/styles/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('all.css'))
		.pipe(gulpif(isProduction, minifyCss()))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('build/styles'))
		.pipe(livereload());
});

// Listens to changes in HTML
gulp.task('html', function () {
	return gulp.src('*.html')
		.pipe(livereload());
});

// Runs tasks (use command gulp watch).
// By using gulp watch you can run all these plugins.
gulp.task('watch', function () {
	livereload.listen();
	gulp.watch('app/scripts/**/*.js', ['scripts']);
	gulp.watch('app/styles/*.scss', ['styles']);
	gulp.watch('*.html', ['html']);
});

gulp.task('default', ['scripts', 'styles', 'watch', 'html']);