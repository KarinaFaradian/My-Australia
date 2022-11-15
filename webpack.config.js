const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
    port: 8888,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: './src/about.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'blog.html',
      template: './src/blog.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'gallery.html',
      template: './src/gallery.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'contact.html',
      template: './src/contact.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'page__giraffes.html',
      template: './src/page__giraffes.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'page__canyon.html',
      template: './src/page__canyon.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'page__koala.html',
      template: './src/page__koala.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'page__coast.html',
      template: './src/page__coast.html',
    }),
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
          'sass-loader',
        ],
      },
    ],
  },
};
