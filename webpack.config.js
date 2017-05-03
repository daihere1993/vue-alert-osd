var ExtractTextPlugin = require('extract-text-webpack-plugin')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.js')

var webpackConfig = merge(baseWebpackConfig, {
  entry: './src',
  output: {
    library: 'VueAlertOSD',
    libraryTarget: 'umd',
    filename: 'vue-alert-osd.min.js',
    path: './lib'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  vue: {
    loaders: {
      css: ExtractTextPlugin.extract('style', 'css')
    }
  },
  plugins: [new ExtractTextPlugin('vue-alert-osd.min.css')]
})

module.exports = webpackConfig
