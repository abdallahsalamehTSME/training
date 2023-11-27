const package = require('./package.json')
const webpack = require('webpack')
const path = require('path')
const Dotenv = require('dotenv-webpack')
const { VueLoaderPlugin } = require('vue-loader')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = env => ({
  target: 'web',
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              loaders: {
                ts: 'babel-loader!ts-loader'
              },
              transformAssetUrls: {
                video: ['src', 'poster'],
                source: 'src',
                img: 'src',
                image: ['xlink:href', 'href'],
                use: ['xlink:href', 'href'],
                'v-empty': 'figureUrl',
                'v-video': ['src', 'poster']
              }
            }
          }
        ]
      },
      {
        test: /\.(t|j)s$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file)
      },
      {
        test: /\.htm$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg|ttf|eot|woff|woff2|mp4)$/,
        exclude: /node_modules/,
        type: 'asset/resource'
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ]
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './src/app'),
      '@pages': path.resolve(__dirname, './src/app/pages'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@meta': path.resolve(__dirname, './src/lib/meta'),
      '@def': path.resolve(__dirname, './src/lib/def'),
      '@hoc': path.resolve(__dirname, './src/lib/hoc'),
      '@hook': path.resolve(__dirname, './src/lib/hook')
    }
  },
  plugins: [
    new Dotenv({
      path: `./.env.${env.vars}`
    }),
    new VueLoaderPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: './public/**/*',
          to: path.resolve(__dirname, 'dist/')
        }
      ]
    }),
    new webpack.DefinePlugin({
      __version__: JSON.stringify(package.version),
      __lib__: JSON.stringify(package.name.substring('@tsmesolutions/'.length))
    })
  ],
  externals: {
    'cubes': 'cubes',
    'cubes-style': 'cubes-style',
    'cubes-ui': 'cubes-ui',
    'cubes-app': 'cubes-app',
    'cubes-auth': 'cubes-auth',
    vue: 'window Vue',
    'vue-router': 'window VueRouter'
  }
})
