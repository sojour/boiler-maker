const path = require('path');

module.exports = {
  entry: ['./app/main.js'],
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  watch: true,
  devtool: 'source-maps',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  // devServer: {
  //   contentBase: path.join(__dirname, 'public'),
  //   compress: true,
  //   port: 8080
  // }
}



