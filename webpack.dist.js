const merge = require('webpack-merge');
const common = require('./webpack.common.js')

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = merge(common,{

  plugins: [
    new UglifyJSPlugin(),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),

    new FaviconsWebpackPlugin('./src/core/main/calendar_icon.png')

    new HtmlWebpackPlugin({
      template:'./src/index.pug',
      filename: path.resolve(__dirname, 'index.html')
    })
  ],

  devtool: 'cheap-module-source-map',

  module: {
    loaders: [
      // Images
      {
        test: /\.(png|svg|jpg|gif)$/,
        loaders: [
          {
            loader:'file-loader',
            options: {
              hash: 'sha512',
              digest: 'hex',
              name: '[name]-[hash].[ext]',
              outputPath: 'img/', // path inside dist folder to store the file
              publicPath:'public/' // path to add to url when replacing html
            }
          },
          {
            loader:'image-webpack-loader',
            options: {
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                floyd: 0.5,
                speed: 2
              },
              mozjpeg: {
                progressive: true,
                arithmetic: false
              }
            }
          }
        ]
      },

    ]
  },
});
