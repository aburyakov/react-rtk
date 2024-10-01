const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Books',
      template: './public/index.html'
    })
  ],
  optimization: {
    runtimeChunk: 'single',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
};