const ExtractTextPlugin = require('extract-text-webpack-plugin'),
  options = require('./webpack.base.js')

options.entry = './src'
options.output = {
  library: 'VueAlertOSD',
  libraryTarget: 'umd',
  filename: 'vue-alert-osd.js',
  path: './lib'
}
options.plugins = [new ExtractTextPlugin('vue-alert-osd.css')]
options.vue.loaders.css = ExtractTextPlugin.extract('style', 'css')
module.exports = options
