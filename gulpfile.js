const { src, dest, watch, series, parallel } = require('gulp');

// CSS ------------------
const sass = require('gulp-sass')(require('sass'));
  // const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss')
const sourcemaps = require('gulp-sourcemaps')


const concat = require('gulp-concat');
const rename = require('gulp-rename');
const notify = require('gulp-notify');
const clean = require('gulp-clean');


// Imágenes ------------------
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin'); // Minificar imágenes
const webp = require('gulp-webp');
const avif = require('gulp-avif');

// JavaScript -----------------
const terser = require('gulp-terser-js');

const paths = {
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js',
    imagenes: 'src/img/**/*'
    //videos: 'src/video/**/*'
}

function css() {
    return src(paths.scss) // Identificar archivo .sass a compilar 'src/scss/app.scss'
        .pipe(sourcemaps.init()) // Guarda la referencia de las lineas de scss en un mapa para editar
        // .pipe(plumber()) // Muestra mensaje de error mas corto sin detener la ejecución
        .pipe(sass()) // Compilarlo
        .pipe(postcss([autoprefixer(), cssnano()])) // compila el css a una linea
        // .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write('.')) // Almacena el mapa en el mismo lugar
        .pipe(dest('build/css')); // Almacenarla en el disco duro
}

function javascript() {
    return src(paths.js)
      .pipe(sourcemaps.init())
      .pipe(concat('bundle.js'))
      .pipe(terser())
      .pipe(sourcemaps.write('.'))
      .pipe(rename({ suffix: '.min' }))
      .pipe(dest('./build/js'))
}

function imagenes() {
    return src(paths.imagenes)
        .pipe(cache(imagemin({ optimizationLevel: 3 })))
        .pipe(dest('build/img'))
        .pipe(notify({ message: 'Imagen Completada' }));
}

function versionWebp() {
    return src(paths.imagenes)
        .pipe(webp())
        .pipe(dest('build/img'))
        .pipe(notify({ message: 'Imagen Webp Completada' }));
}

function versionAvif() {
    return src(paths.imagenes)
        .pipe(avif())
        .pipe(dest('build/img'))
        .pipe(notify({ message: 'Imagen Avif Completada' }));
}


function watchArchivos() {
    watch(paths.scss, css);
    watch(paths.js, javascript);
    watch(paths.imagenes, imagenes);
    watch(paths.imagenes, versionWebp);
    watch(paths.imagenes, versionAvif);
}

exports.css = css;
exports.watchArchivos = watchArchivos;
// exports.default = parallel(css, javascript, imagenes, versionWebp, versionAvif, watchArchivos);
exports.default = parallel(css, javascript, imagenes, versionWebp, watchArchivos);
// exports.default = parallel(imagenes, versionWebp, versionAvif, watchArchivos);