const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const ExtraEntryWebpackPlugin = require('extra-entry-webpack-plugin')

const gmedic = require("./gmedic.config.js");
const routes = require("./src/core/routes.js")

var views = routes.map(route => {
  return new HtmlWebpackPlugin({
    template:'./src/sections/'+route.config.viewPath + ".pug",
    filename: path.resolve(__dirname, './public/views/' + route.config.viewPath + ".html"),
    alwaysWriteToDisk: true
  })
})

module.exports = merge(common,{

  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),

    new HtmlWebpackPlugin({
      template:'./src/index.pug',
      filename: path.resolve(__dirname, 'index.html'),
      alwaysWriteToDisk: true
    }),

    new ExtraEntryWebpackPlugin({
      entry:'./src/index.pug',
      outputName: path.resolve(__dirname, 'index.html'),
    }),

    new HtmlWebpackHarddiskPlugin()
  ].concat(views),

  module:{
    rules: [
      // Images
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader:'file-loader',
            options: {
              hash: 'sha512',
              digest: 'hex',
              name: '[name]-[hash].[ext]',
              outputPath: 'img/', // path inside dist folder to store the file
              publicPath: gmedic.APP_URL + '/public/' // path to add to url when replacing html
            }
          }
        ]
      },
    ]
  },

  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../'),
    publicPath:  gmedic.APP_URL + '/public/',
    compress:true,
    hot:true,
    port: 8081,
    host: '0.0.0.0',
    openPage :  gmedic.APP_URL + '',
    open: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },
})
