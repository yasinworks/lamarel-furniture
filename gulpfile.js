const gulp = require('gulp'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-clean-css'),
    minifyJs = require('gulp-js-minify'),
    uglify = require('gulp-uglify'),
    browserSync = require("browser-sync").create();

const path = {
    build: {
        js: 'build/js/',
        style: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts'
    },
    src: {
        js: 'src/js/*.js',
        style: 'src/scss/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    watch: {
        html: './index.html',
        js: 'src/js/*.js',
        style: 'src/scss/**/*.scss',
        img: 'src/img/**/*.*',
    },
    clean: './build/'
};

const cleanBuild = () => (
    gulp.src(path.clean, {allowEmpty: true})
        .pipe(clean())
);

const scssBuild = () => (
    gulp.src(path.src.style, {allowEmpty: true})
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('styles.min.css'))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest(path.build.style))
        .pipe(browserSync.stream())
);

const jsBuild = () => (
    gulp.src(path.src.js)
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(minifyJs())
        .pipe(gulp.dest(path.build.js))
        .pipe(browserSync.stream())
);

const imgBuild = () => (
    gulp.src(path.src.img, {allowEmpty: true})
        .pipe(gulp.dest(path.build.img))
        .pipe(browserSync.stream())
);

const fontsBuild = () => (
     gulp.src(path.src.fonts, {allowEmpty: true})
        .pipe(gulp.dest(path.build.fonts))
        .pipe(browserSync.stream())
)

const watcher = () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(path.watch.html).on('change', browserSync.reload);
    gulp.watch(path.watch.style, scssBuild).on('change', browserSync.reload);
    gulp.watch(path.watch.js, jsBuild).on('change', browserSync.reload);
    gulp.watch(path.watch.img, imgBuild).on('change', browserSync.reload);
};

gulp.task('default', gulp.series(
    cleanBuild,
    scssBuild,
    jsBuild,
    imgBuild,
    fontsBuild,
    watcher
));