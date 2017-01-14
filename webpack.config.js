const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'style-loader!css-loader!vuetify/dist/vuetify.min.css',
    './src/main.js',
  ],
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'build.js',
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }],
  },
  // devServer: {
  //   historyApiFallback: true,
  // },
  devtool: '#eval-source-map',
  performance: false,
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
  ],
};
