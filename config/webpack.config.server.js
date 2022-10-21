const nodeExternals = require('webpack-node-externals')
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

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
    new CopyPlugin({
      patterns: [{ context: 'src/server', from: 'views', to: 'views' }]
    })
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