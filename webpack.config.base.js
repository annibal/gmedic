const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.js',
    print: './src/print.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public/'),
    publicPath: '/public/'
  },
  plugins: [
    new CleanWebpackPlugin(['public']),
  ],

  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../'),
    publicPath: '/gmedic/public/',
    compress:true,
    port: 8081,
    host: '0.0.0.0',
    openPage : '/gmedic',
    open: true,
    overlay: {
      warnings: true,
      errors: true
    }

  },

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
