const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const gmedic = require("./gmedic.config.js");
const routes = require("./src/core/routes.js")

var views = routes.map(route => {
  return new HtmlWebpackPlugin({
    template:'./src/sections/'+route.config.viewPath + ".pug",
    filename: path.resolve(__dirname, './public/views/' + route.config.viewPath + ".html"),
    alwaysWriteToDisk: true,
    inject:false
  })
})

views.push(
  new HtmlWebpackPlugin({
    template:'./src/components/notFound/404.pug',
    filename: path.resolve(__dirname, './public/views/main/404.html'),
    alwaysWriteToDisk: true,
    inject:false
  })
)

module.exports = {
  views:views,
  webpackCommonConfig: {
  entry: {
    app: './src/app.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public/'),
    publicPath: gmedic.APP_URL + '/public/'
  },
  plugins: [
    new CleanWebpackPlugin(['public']),
    new ExtractTextPlugin("style.css")
  ],

  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  },

  module: {
    rules: [
      // HTML
      {
        test: /\.pug/,
        use: [
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

      // SASS (SCSS)
      {
        test: /\.(scss|sass|css)$/,
        exclude: /(node_modules|bower_components)/,
        use:
          ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use:
            [
              {
                loader: "css-loader", // translates CSS into CommonJS
                options: {}
              },
              {
                loader: "sass-loader", // compiles Sass to CSS
                options: {
                  includePaths: [path.resolve(__dirname, 'node_modules')],
                }
              }
            ]
          })
      },

      // JS
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env'],
              filenameRelative: gmedic.APP_URL
            }
          }
        ]
      },

      // Fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
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
}};
