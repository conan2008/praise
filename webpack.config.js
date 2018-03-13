const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'thumb': __dirname + '/public/scripts/thumb.js',
        'star': __dirname + '/public/scripts/star.js'
    },
    output: {
        path: __dirname + '/build/public',
        publicPath: '',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: true //css压缩
                        }
                    }],
                })
            }]
        },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name:'common', 
            chunks:['thumb', 'star']
        }),
        new HtmlWebpackPlugin({
            filename: './views/thumbIndex.html',
            template: './public/libs/thumb2html.js',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: './views/thumb.html',
            template: './public/views/thumb.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: './views/starIndex.html',
            template: './public/libs/star2html.js',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: './views/star.html',
            template: './public/views/star.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: './views/layout.html',
            template: './public/views/layout.html',
            inject: false
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('praise.css')
    ]
}