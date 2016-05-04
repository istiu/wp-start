var gulp        = require('gulp'),
  plumber        = require('gulp-plumber'),
  // browserSync    = require('browser-sync'),
  // reload         = browserSync.reload,

  uglify         = require('gulp-uglify'),
  concat         = require('gulp-concat'),
  imagemin       = require('gulp-imagemin'),
  stylus         = require('gulp-stylus'),
  poststylus     = require('poststylus'),
  sourcemaps     = require('gulp-sourcemaps'),
  autoprefixer   = require('autoprefixer'),
  lost           = require('lost');


// browser-sync task for starting the server.
// gulp.task('browser-sync', function() {
//     //watch files
//     var files = [
//     './style.css',
//     './*.php'
//     ];
//
//     //initialize browsersync
//     browserSync.init(files, {
//     //browsersync with a php server
//     proxy: "localhost/~robertjonathan/_start/start-wp",
//     notify: false
//     });
// });

/**
 * Stylus task
 */
gulp.task('stylus', function(){
  gulp.src('src/styl/style.styl')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(stylus({
      use: [
        poststylus(['lost', 'autoprefixer', 'rucksack-css'])
      ]
    }))
    .pipe(gulp.dest(''))
    // .pipe(browserSync.reload({stream:true}))
    // .pipe(gulp.dest(''))
});

/**
 * Javascript Task
 */
gulp.task('js', function(){
  return gulp.src('src/js/**/*.js')
    .pipe(plumber())
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/'))
});

/**
 * Imagemin Task
 */
gulp.task('imagemin', function() {
  return gulp.src('src/img/**/*.{jpg,png,gif}')
    .pipe(plumber())
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('assets/img/'));
});

// Default task to be run with `gulp`
gulp.task('default', function () {
  gulp.watch('src/styl/**/*.styl', ['stylus']);
  gulp.watch('src/js/**/*.js', ['js']);
  gulp.watch('src/img/**/*.{jpg,png,gif}', ['imagemin']);
});
