const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

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
    new CleanWebpackPlugin(['public'])
  ],

  module: {
    loaders: [
      // HTML
      {
        test: /\.pug/,
        loaders: [
          {
            loader:'html-loader'
          },
          {
            loader:'pug-html-loader',
            options: {

              data: {}
            }
          }
        ]
      },

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

      // SASS (SCSS)
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
