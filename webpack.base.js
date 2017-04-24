const path = require('path'),
  projectRoot = path.resolve(__dirname, './')

module.exports = {
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/ 
      }
    ]
  },
  vue: {
    loaders: {
      js: 'babel!eslint'
    }
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
}
