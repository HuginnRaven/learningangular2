const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const Webpack = require("webpack");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


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
        extensions: ['.ts', '.tsx', '.js', '.css']
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                include: path.resolve(__dirname, "src"),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                    publicPath: '/dist'
                })
            },
            {
                test: /\.tsx?$/,
                include: path.resolve(__dirname, "src"),
                loader: 'ts-loader'
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
        new ExtractTextPlugin({
            filename: 'app.css',
            disable: false,
            allChunks: true
        }),
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.NamedModulesPlugin(),
        new Webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname, '../src')
        ),
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
                caseSensitive: true,
                collapseWhitespace: true
            },
            hash: true,
            filename: './contact.html',
            template: './src/contact/contact.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Events',
            minify: {
                caseSensitive: true,
                collapseWhitespace: true
            },
            hash: true,
            filename: './event-list.html',
            template: './src/events/event-list.html'
        }),
         new HtmlWebpackPlugin({
            title: 'EventsDetails',
            minify: {
                caseSensitive: true,
                collapseWhitespace: true
            },
            hash: true,
            filename: './event-details.html',
            template: './src/events/event-details/event-details.html'
        })
    ]
}