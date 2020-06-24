const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = [
  new HTMLWebpackPlugin({
    title: 'webpack output management',
    filename: "admin.html",
    template: "src/index.html"
  }),
  new CleanWebpackPlugin({
    cleanAfterEveryBuildPatterns: ['dist']
  })
]