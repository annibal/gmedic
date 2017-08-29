const merge = require('webpack-merge');
const common = require('./webpack.common.js')

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common,{

  plugins: [
    new UglifyJSPlugin(),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],

  devtool: 'cheap-module-source-map',

  module: {
    loaders: [
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
                quality: '65-90',
                speed: 4
              },
              mozjpeg: {
                progressive: true,
                quality: 65
              }
            }
          }
        ]
      },

    ]
  },
});
