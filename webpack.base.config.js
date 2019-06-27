const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackConfig = require('webpack-config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const Config = WebpackConfig.default;
const env = WebpackConfig.environment.getOrDefault('env', 'development');

const baseConfig = new Config().merge({
  mode: env,
  entry: {
    tempEntryPoint: ['./static/scss/Izenda.Synergy.scss']
  },
  output: {
    // Produce compiled files to specific folder of each environments.
    path: path.resolve(__dirname, './dist/' + env)
  },
  module: {
    rules: [
      // gif loader
      {
        test: /\.gif$/,
        loader: 'url-loader?limit=10000&name=assets/[name].[ext]?[sha512:hash:base64:7]'
      },
      // png loader
      {
        test: /\.png$/,
        loader: 'file-loader?name=assets/[name].[ext]?[sha512:hash:base64:7]'
      },
      // font loader
      {
        test: /\.woff|\.woff2|\.svg|.eot|\.ttf|\.otf?$/,
        loader: 'url-loader?limit=10000&name=assets/[name].[ext]?[sha512:hash:base64:7]'
      },
      // scss loader
      {
        test: /\.scss$/,
        include: [path.resolve(__dirname, './static/scss')],
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'resolve-url-loader', 'sass-loader']
      }
    ]
  },

  plugins: [
    // Clean up specific directories (dist/...) before the build.
    new CleanWebpackPlugin({
      dry: true
    }),
    // compose css
    new MiniCssExtractPlugin({
      filename: 'izenda-ui.css'
    })
  ]
});

module.exports = baseConfig;
