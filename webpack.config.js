const path = require('path')
const moduleRule = require('./config/modules')
const plugins = require('./config/plugins.js')

const config = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: moduleRule,
  plugins
}

module.exports = config
