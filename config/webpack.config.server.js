const webpack = require("webpack");
const nodeExternals = require('webpack-node-externals')
const path = require('path')

module.exports = {
  name: 'server',
  entry: {
    server: path.resolve(__dirname, '../src/server/index.ts'),
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../build/server'),
    filename: '[name].js',
    publicPath: path.resolve(__dirname, '../build/server'),
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  externals: [nodeExternals()],
  target: 'node',
  node: {
    __dirname: false,
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.json',
        },
      },
    ],
  },
}