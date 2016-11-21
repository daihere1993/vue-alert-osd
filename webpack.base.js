const path = require('path'),
  projectRoow = path.resolve(__dirname, './')

module.exports = {
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoow,
        exclude: /node_modules/ }
    ]
  },
  vue: {
    loaders: {
      js: 'babel!eslint'
    }
  }
}
