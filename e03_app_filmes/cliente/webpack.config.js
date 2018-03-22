const path = require('path')

const config = {
  mode: 'production',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, '../servidor/publico'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/, use: 'babel-loader'
      },
      {
        test: /\.js$/, use: 'babel-loader'
      }
    ]
  }
}

module.exports = config
