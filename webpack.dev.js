const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 3000,
    compress: true
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  }
})
