const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'main': __dirname + '/public/scripts/index.js'
    },
    output: {
        path: __dirname + '/build/public',
        publicPath: '',
        filename: '[name].bundle.[chunkhash:8].js'
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
            chunks:['main']
        }),
        new HtmlWebpackPlugin({
            filename: './views/index.html',
            template: './public/libs/index2html.js',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: './views/praise.html',
            template: './public/views/praise.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: './views/layout.html',
            template: './public/views/layout.html',
            // chunks: ['common','main','praise'],
            inject: false
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('praice.[contenthash:8].css')
    ]
}