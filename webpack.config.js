const path = require('path');
const webpack = require('webpack'); 
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');


const env = process.env.NODE_ENV

const extractSass = new ExtractTextPlugin({
    filename: "[name].css"
});

function getPlugins()
{
    let plugins = []
    if(env == "production") plugins.push(new webpack.optimize.UglifyJsPlugin())
    plugins.push(extractSass)
    plugins.push(new CopyWebpackPlugin([{ from: '../static' }]))
    return plugins
}


module.exports = {
    context: __dirname + "/src",
    entry: ["./script/app.js"],
    devtool: 'source-map',
    output: {
        path: __dirname+"/dist",
        filename: "bundle.js"
    },

    plugins:getPlugins(),

    module:{

        loaders:[
            {
                loader: "babel-loader",
                // Skip any files outside of your project's `src` directory
                include: [
                    path.resolve(__dirname, "src/script"),
                ],
                // Only run `.js` and `.jsx` files through Babel
                test: /\.jsx?$/,
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015'],
                  }

            },

            {
                test: /\.scss$/,
                //loaders: ['style-loader', 'css-loader', 'sass-loader']
                loaders:extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },

            {
                test: /\.(png|jpg|gif|html)$/,
                loader:'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }  
            },


        ]
    }
};