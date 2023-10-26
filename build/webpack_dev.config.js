const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/main.tsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        loader: 'ts-loader',
      },
      {
        test: /\.js|jsx$/,
        exclude: /(node_modules | .json)/,
        loader: 'babel-loader',
      },
      {
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  // TODO 看externals相關資訊
  // externals: {
  //   react:"React",
  //   "react-dom": "ReactDOM"
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'], // 要检查的文件扩展名
      failOnError: true,
    }),
  ],
  devServer: {
    open: true,
    port: 3000,
  },
};
