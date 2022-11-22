const webpack = require("webpack");
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')

module.exports = {
  name: 'client',
  entry: {
    client: path.resolve(__dirname, '../src/client/client.tsx'),
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../build/server/static'),
    filename: '[name].[contenthash].js',
    publicPath: './',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.client.json',
        },
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), 
    new WebpackManifestPlugin(),
    new webpack.DefinePlugin({
      __isBrowser__: "true",
    }),
  ],
}