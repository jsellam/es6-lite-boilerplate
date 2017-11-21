const path = require('path');
const webpack = require('webpack'); 

module.exports = {
    entry: ["./src/script/app.js"],
    devtool: 'source-map',
    output: {
        path: __dirname+"/dist",
        filename: "bundle.js"
    },

    plugins:[
        new webpack.optimize.UglifyJsPlugin()
    ],

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

            }
        ]
    }
};