'use strict';
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {

    entry: {
        main: './src/main.js'
    },

    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract(
                    'css?sourceMap!less?sourceMap'
                )
            },
            {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract(
                    'css?sourceMap!stylus?sourceMap'
                )
            },
            {
                test: /\.scss/,
                loader: ExtractTextPlugin.extract(
                    'css?sourceMap!sass?sourceMap'
                )
            },
        ]
    },

    devtool: 'source-map',

    plugins: [
        new ExtractTextPlugin('styles.css', { allChunks: true })
    ]

};
