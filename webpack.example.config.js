var baseWebpackConfig = require('./webpack.base.js')
var merge = require('webpack-merge')

var webpackConfig = merge(baseWebpackConfig, {
  entry: './example',
  output: {
    filename: './example/dist/build.js',
    publicPath: '/'
  }
})

module.exports = webpackConfig
