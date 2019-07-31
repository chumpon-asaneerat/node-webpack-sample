const path = require('path')
const webpack = require('webpack')

/*
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
};
*/
module.exports = {
    mode: 'development',
    entry: { 
        main: './app/js/main.js',
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devtool: 'inline',
    optimization: {
        minimize: true
    },
    module: {
        rules: [{
            test: /\.riot$/,
            exclude: /node_modules/,
            use: [{
                loader: '@riotjs/webpack-loader',
                options: { hot: true }
            }]
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: { presets: ['@babel/preset-env'] }
            }
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
                // style-loader
                { 
                    loader: 'style-loader'
                },
                // css-loader
                {
                    loader: 'css-loader',
                    options: { modules: false }
                }
            ]
        }]
    }
}