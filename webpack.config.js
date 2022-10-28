const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_END || 'development';
const devMode = mode === 'development';

module.exports = {
    entry: './src/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    mode: 'development',
    devServer: {
        compress: true,
        port: 8880,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 
                    'css-loader',
                    'sass-loader'
                ],
            },
        ],
    },
};
