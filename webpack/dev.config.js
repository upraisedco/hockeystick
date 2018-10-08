const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const base = require('./base.config.js');
const parentDir = path.join(__dirname, '../');

module.exports = merge(base, {
  devServer: {
    contentBase: parentDir,
    headers: { "Access-Control-Allow-Origin": "*" },
    historyApiFallback: true,
    open: true,
    port: 8080,
    proxy: {
      '/api': 'http://localhost:9000'
    },
  },
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      'API_HOST': JSON.stringify('http://localhost:9000'),
      'WEB_HOST': JSON.stringify('http://localhost:8080'),
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
      }
    })
  ],
});
