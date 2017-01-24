module.exports = {
  module: {
    loaders: [{
      test: /\.js?x/,
      loader: 'babel'
    }]
  },
  devServer: {
    port: 9000
  }
}
