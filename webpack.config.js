const webpack = require('webpack');
const ExtractPlugin = require('extract-text-webpack-plugin');

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
    new ExtractPlugin('./dist/bundle.css')
  ]
};
