const mix = require('laravel-mix');
const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');


mix
.webpackConfig({
    plugins:[
        new BrowserSyncPlugin({
            files:['**/*.css']
        },{reload:true})
    ]
})
.options({ processCssUrls: false })
.setPublicPath('dist/')
.sass('src/styles/app.scss','dist/static/app.css')
.js('src/script/app.js','dist/static/app.js')
.copyDirectory('static/','dist/')
/*
.browserSync({
    logSnippet: true,
	proxy: false,
    injectChanges: true
});
*/