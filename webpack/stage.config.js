const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const base = require('./base.config.js');
const parentDir = path.join(__dirname, '../');

module.exports = merge(base, {
  devtool: 'source-map',
  devServer: {
    contentBase: './src',
    compress: true
  },
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      'API_HOST': JSON.stringify('https://platform-stage.riseupnow.co'),
      'WEB_HOST': JSON.stringify('https://platform-stage.riseupnow.co'),
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
      }
    })
  ]
});
