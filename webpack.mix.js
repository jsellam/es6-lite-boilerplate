const mix = require('laravel-mix');
const path = require('path');

mix
.options({ processCssUrls: false })
.setPublicPath('dist/')
.sass('src/styles/app.scss','dist/static/app.css')
.js('src/script/app.js','dist/static/app.js')
.copyDirectory('static/','dist/')
.browserSync({
    logSnippet: true,
	proxy: false,
    injectChanges: true
});