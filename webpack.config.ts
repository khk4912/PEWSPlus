import type { Configuration } from 'webpack'
import * as path from 'path'
import CopyPlugin = require('copy-webpack-plugin')

const mode =
  process.env.NODE_ENV === 'production' ? 'production' : 'development'

const config: Configuration = {
  mode,
  devtool: 'inline-source-map',
  entry: {
    app: path.resolve(__dirname, 'src/app/App.tsx'),
    content_script: path.resolve(__dirname, 'src/scripts/content_script.ts')
  },
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: '[name].js',
    assetModuleFilename: 'assets/[hash][ext][query]'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'public',
          to: '..'
        }
      ]
    })
  ]
}

export default config
