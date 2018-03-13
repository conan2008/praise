const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: {
        'index': __dirname + '/public/scripts/praise.js'
    },
    output: {
        path: __dirname + '/build/public',
        publicPath: 'localhost:8080/build/public',
        filename: '[name].bundle.[hash:8].js'
    },
    devServer: {
        proxy: {
            "**": "http://localhost:3002"
          },
    },
    module: {
        rules: [{
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader"
                    }],
                })
            }]
        },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './views/index.html',
            template: "./public/views/index.html",
            chunks: []
        }),
        new HtmlWebpackPlugin({
            filename: './views/layout.html',
            template: "./public/views/layout.html",
            chunks: ["index"],
            inject: 'head'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("style.[hash:8].css")
    ]
}