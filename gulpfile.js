/* File: gulpfile.js */

// grab our packages
var gulp   = require('gulp'),
    connect = require('gulp-connect'),
	jshint = require('gulp-jshint'),
	nodemon = require('gulp-nodemon'),
	browserify = require('browserify'),
	source = require('vinyl-source-stream'),
	sourcemaps = require('gulp-sourcemaps'),
	concatCss = require('gulp-concat-css'),
	sass = require('gulp-sass'),
	cleanCss = require('gulp-clean-css'),
	uglify = require('gulp-uglify'),
	ngAnnotate = require('gulp-ng-annotate'),
	buffer = require('vinyl-buffer'),
	livereload = require('gulp-livereload'),
	notifier = require('node-notifier'),
	exec = require('child_process').exec;

function runCommand(command) {
	return function (cb) {
		exec(command, function (err, stdout, stderr) {
			console.log(stdout);
			console.log(stderr);
			cb(err);
		});
	}
}

// define the default task
gulp.task('default', ['connect']);

gulp.task('connect', function() {
  connect.server({
      root: 'public/views',
      port: 3000
  });
});



// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('src/*.js', ['browserify']);
	gulp.watch('src/js/*.js', ['browserify']);
	gulp.watch('src/**/*.js', ['browserify']);
	gulp.watch('src/js/**/*.js', ['browserify']);
	gulp.watch('src/css/*.scss', ['concatCss']);
	gulp.watch('src/**/*.scss', ['concatCss']);
	gulp.watch('src/**/**/*.html', ['copyViews']);
	gulp.watch('src/**/**/*.handlebars', ['copyViews']);
});

// configure the jshint task
gulp.task('jshint', function() {
	return gulp.src(['server.js','server/**.*.js','src/*.js','src/**/*.js'])
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('concatCss', function () {
	console.log('*******-CONCATENATING CSS-*******')
  	return gulp.src(['src/*.scss','src/**/*.scss'])
  		.pipe(sass().on('error', sass.logError))
	    .pipe(concatCss("styles.css"))
	    .pipe(cleanCss({compatibility: 'ie8'}))
			.pipe(sourcemaps.init({ loadMaps: true }))
			.pipe(sourcemaps.write('./'))
	    .pipe(gulp.dest('./public/css/'))
	    .pipe(livereload());
});

gulp.task('browserify', function() {
	console.log('*******-MINIFYING-*******')
	// Grabs the app.js file
	return browserify('./src/app.js')
		// bundles it and creates a file called main.js
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(buffer())
		.pipe(ngAnnotate({
          add: true
        }))
		.pipe(uglify())
      	.pipe(sourcemaps.init({ loadMaps: true }))
      	.pipe(sourcemaps.write('./'))
		// saves it in the public/js/ directory
		.pipe(gulp.dest('./public/js/'))
		.pipe(livereload());
});

gulp.task('copyViews', function(){
	console.log('*******-COPYING VIEWS-*******')
	return gulp.src(['src/**/*.html', 'src/*.html', 'src/**/*.handlebars', 'src/*.handlebars' ], {base: 'src'})
		.pipe(gulp.dest('./public/views/'))

});

gulp.task('dev', ['watch', 'concatCss', 'browserify', 'copyViews'], function() {
	connect.server({
        root: 'public',
        fallback: 'public/views/index.html',
        port: 3000,
        livereload: true
    });
});

gulp.task('run', ['concatCss', 'browserify', 'copyViews'], function() {
	connect.server({
        root: 'public',
        fallback: 'public/views/index.html',
        port: 80,
        livereload: true
    });
});
