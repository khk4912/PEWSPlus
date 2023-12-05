const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

const mode = process.env.NODE_ENV || 'development'

const webpackConfig = {
  mode,
  entry: {
    popup: path.resolve(__dirname, 'src/popup.ts'),
    content_script: path.resolve(__dirname, 'src/content_script.ts'),
    service_worker: path.resolve(__dirname, 'src/service_worker.ts'),
    inject: path.resolve(__dirname, 'src/inject.ts')
  },

  output: {
    path: path.resolve(__dirname, './dist/js'),
    filename: '[name].js'
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'public', to: '..' }]
    })
  ],

  devtool: false
}

module.exports = webpackConfig
