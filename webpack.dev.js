const path = require('path')
const { merge } = require('webpack-merge')
const CopyPlugin = require('copy-webpack-plugin')
const config = require('./webpack.config.js')
const WriteFilePlugin = require('write-file-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
require('./webpack.config.modules').init(false)

module.exports = env =>
  merge(config(env), {
    entry: {
      ['training']: './src/main.ts'
    },
    output: {
      pathinfo: false,
      assetModuleFilename: pathData => {
        const filepath = path.dirname(pathData.filename).split('/').slice(1).join('/')
        return `${filepath}/[name].[ext]`
      },
      library: '[name]',
      libraryTarget: 'amd',
      umdNamedDefine: true,
      globalObject: 'this',
      filename: '[name].js',
      path: path.join(__dirname, 'dist/'),
      publicPath: './',
      clean: true
    },

    target: 'web',
    devtool: env.devtool,
    devServer: {
      client: {
        logging: 'log'
      },
      static: [
        { directory: path.join(__dirname, 'dist') },
        { directory: path.join(__dirname, 'node_modules/cubes/dist'), publicPath: '/packages/cubes' },
        { directory: path.join(__dirname, 'node_modules/cubes-style/dist'), publicPath: '/packages/cubes-style' },
        { directory: path.join(__dirname, 'node_modules/cubes-ui/dist'), publicPath: '/packages/cubes-ui' },
        { directory: path.join(__dirname, 'node_modules/cubes-app/dist'), publicPath: '/packages/cubes-app' },
        { directory: path.join(__dirname, 'node_modules/cubes-auth/dist'), publicPath: '/packages/cubes-auth' },
        { directory: path.join(__dirname, 'node_modules/vue/dist'), publicPath: '/packages/vue' },
        { directory: path.join(__dirname, 'node_modules/vue-router/dist'), publicPath: '/packages/vue-router' }
      ],
      historyApiFallback: {
        index: 'index.html'
      },
      hot: true,
      https: true,
      allowedHosts: 'all',
      host: 'localhost.cubes.solutions',
      devMiddleware: {
        publicPath: './dist/',
        writeToDisk: true
      }
    },

    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: 'vendor',
            globOptions: {
              ignore: ['loader.custom.js', 'packages.*.json']
            },
            to: path.resolve(__dirname, 'dist/')
          }
        ]
      }),

      new CopyPlugin({
        patterns: [{ from: 'vendor/packages.debug.json', to: path.resolve(__dirname, 'dist/packages.json') }]
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        chunks: []
      }),
      new WriteFilePlugin()
    ]
  })
