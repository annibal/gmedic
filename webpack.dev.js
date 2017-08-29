const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const path = require('path');
const webpack = require('webpack');


module.exports = merge(common,{

  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ],

  module:{
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
          }
        ]
      },
    ]
  },

  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../'),
    publicPath: '/gmedic/public/',
    compress:true,
    hot:true,
    port: 8081,
    host: '0.0.0.0',
    openPage : '/gmedic',
    open: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },
})
