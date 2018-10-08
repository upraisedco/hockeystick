const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path');

const parentDir = path.join(__dirname, '../');

module.exports = {
  entry: [
    'babel-polyfill',
    path.join(parentDir, 'index.js')
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.less$/,
        loaders: [
          'style-loader', // creates style nodes from JS strings
          'css-loader',   // translates CSS into CommonJS
          'sass-loader'   // compiles Sass to CSS
        ]
      }, {
        test: /\.s?css$/,
        loaders: [
          'style-loader', // creates style nodes from JS strings
          'css-loader',   // translates CSS into CommonJS
          'sass-loader'   // compiles Sass to CSS
        ]
      }, {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        loader: 'url-loader'
      }
    ]
  },

  plugins: [
    new CopyWebpackPlugin(
      [{from: path.join(parentDir, 'src/stubs'), to: path.join(parentDir, './public'), toType: 'dir'}]
    )
  ],

  output: {
    path: path.join(parentDir, './public'),
    filename: 'bundle.js',
    publicPath: '/public'
  }
}
