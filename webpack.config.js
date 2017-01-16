const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const paths = {
  src: path.resolve('./src'),
  dist: path.resolve('./dist')
}

module.exports = {
  entry: path.resolve(paths.src, 'index.js'),
  output: {
    path: paths.dist,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: paths.dist,
    outputPath: paths.dist,
    historyApiFallback: true
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: paths.src,
      loaders: ['babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-2']
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(paths.src, 'index.html')
    })
  ]
}