const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const Webpack = require("webpack");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var isProduction = process.env.NODE_ENV === 'production';
var cssDev = ["style-loader", "css-loader"];
var cssProduction = ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                });
var cssConfiguration = isProduction ? cssProduction : cssDev;                


module.exports = {
    devtool: 'source-map',
    entry: {
        'app': './src/app.ts',
        'contact': './src/contact/contact.ts'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].bundle.js'
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                include: path.resolve(__dirname, "src"),
                loader: 'ts-loader'
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, "src"),
                use: cssConfiguration
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        hot: true,
        port: 3100
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            proxy: 'http://localhost:3100',
            reload: false
        }),
        new ExtractTextPlugin({
            filename: 'app.css',
            disable: false,
            allChunks: true
        }), 
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            title: 'Project Demo',
            chunks: ['app'],
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            filename: './index.html',
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Project Contact',
            chunks: ['contact'],
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            filename: './contact.html',
            template: './src/contact/contact.html'
        }),
    ]
}