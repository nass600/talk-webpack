const webpack = require('webpack');
const ExtractPlugin = require('extract-text-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const path = require('path');
const buildPath = path.join(__dirname, './');

module.exports = {
  entry: [
    './src/js/index.js'
  ],
  output: {
    filename: './dist/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        use: ExtractPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      minify: true,
      comments: false
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractPlugin('./dist/bundle.css'),
    new DashboardPlugin()
  ],
  devServer: {
    contentBase: buildPath,
    port: 3000,
    host: '0.0.0.0',
    disableHostCheck: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 500
    }
  }
};
