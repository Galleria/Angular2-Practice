var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VERSION = require('../package.json').version;

const METADATA = {
    title:"Audit and Release",
    VERSION:VERSION,
};

module.exports = {
    metadata:METADATA,
    entry: './src/main.ts',
    output: {
        path:'./dist',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['ts','angular2-template-loader'],
                exclude: [/\.(spec|e2e)\.ts$/]
            },
            {
                test: /\.ts$/,
                loader: 'string-replace',
                exclude: [/\.(spec|e2e)\.ts$/]
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin(
            {
                template: './src/app/html/index.html',
                inject: true
            }
        ),
        new CopyWebpackPlugin(
            [
                { from: './src/app/html/error.html', to: 'error.html' }
            ]
        )
    ],
    devServer: {
      port:8083,
      historyApiFallback: true,
      stats: {
        colors: true
      },
      compress: true
    }
};
