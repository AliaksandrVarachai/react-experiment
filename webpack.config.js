const webpack = require('webpack');
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';
console.log('***** process.env.NODE_ENV=', process.env.NODE_ENV);
console.log('***** typeof process.env.NODE_ENV=', typeof process.env.NODE_ENV);

module.exports = {
  entry: {
    app: './src/app',
    //for the sake of experiment (see readme.md)
    'proba1': './src/proba1',
    'proba-router': './src/proba-router',
    'proba-history': './src/proba-history',
    'proba-redux': './src/proba-redux',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  devtool: isProduction ? false : 'eval-source-map', //'eval' does not work
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        isProduction //we takes env from NODE end pass it WEB
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