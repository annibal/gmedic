const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  entry: {
    app: './src/app.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public/'),
    publicPath: '/gmedic/public/'
  },
  plugins: [
    new CleanWebpackPlugin(['public']),
  ],

  module: {
    loaders: [
      // CSS
      {
        test: /\.css$/,
        loaders: [
          {
            loader:'style-loader',
            options: {}
          },
          {
            loader:'css-loader',
            options: {}
          }
        ]
      },

      {
        test: /\.scss$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      },

      // JS
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env'],
              filenameRelative: '/gmedic'
            }
          }
        ]
      },

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

      // Fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loaders: [
          {
            loader:'file-loader',
            options: {
              outputPath: 'fonts/', // path inside dist folder to store the file
              publicPath:'public/' // path to add to url when replacing html
            }
          }
        ]
      }
    ]
  },
};
