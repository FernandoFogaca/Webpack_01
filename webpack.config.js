const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        static: {
            directory: path.join(__dirname, './dist'),
        },
        port: 3000,
    },
    entry: {
        index: './index.js',
        gerenciaDeNomes: './gerenciaDeNomes.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    target: 'web',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            chunks: ['index']
        })
    ]
};
