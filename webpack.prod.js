const path = require('path')
const { merge } = require('webpack-merge')
const config = require('./webpack.config.js')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
require('./webpack.config.modules').init(true)

let prodConfig = env =>
  merge(config(env), {
    entry: {
      ['training']: { import: './src/main.ts' }
    },
    devtool: env.devtool,
    output: {
      library: '[name]',
      filename: '[name].js',
      libraryTarget: 'amd',
      umdNamedDefine: true,
      globalObject: 'this',
      chunkFilename: '[contenthash].js',
      path: path.join(__dirname, 'dist/'),
      publicPath: '/',
      clean: true
    },
    optimization: {
      minimizer: [`...`, new CssMinimizerPlugin()]
    },
    plugins: [
      new CompressionPlugin(),
      new CopyWebpackPlugin({
        patterns: [{ from: 'vendor', globOptions: { ignore: ['loader.custom.js', 'packages.*.json'] } }]
      }),
      new BundleAnalyzerPlugin({ analyzerMode: 'static', reportFilename: '../report.html' })
    ],
    optimization: {
      splitChunks: {
        chunks: 'async'
      }
    }
  })

module.exports = prodConfig
