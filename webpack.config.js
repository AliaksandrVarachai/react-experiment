const webpack = require('webpack');
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    app: './src/app'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  devtool: 'eval',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        ENV: true
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'style-loader',

          }, {
            loader: 'css-loader',
            options: {
              sourceMap: !isProduction
            }
          }
        ]
      }
    ]
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'src'), //path to static src, i.e. index.html
    port: 8080
  }
};