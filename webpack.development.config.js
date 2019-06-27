const webpack = require('webpack');
const WebpackConfig = require('webpack-config');
const Config = WebpackConfig.default;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const devConfig = new Config().extend('./webpack.base.config.js').merge({
  devtool: 'cheap-module-source-map',
  output: {
    pathinfo: true
  },
  plugins: [
    // set the options for loaders
    new webpack.LoaderOptionsPlugin({
      options: {
        context: path.resolve(__dirname, '../'),
        debug: true,
        postcss: () => [
          require('autoprefixer')({
            browsers: ['ie >= 10', 'ff >= 25', 'safari >= 6', 'chrome >= 31', 'opera >= 34']
          })
        ],
        sassLoader: {
          includePaths: [path.resolve(__dirname, '../static/scss')]
        }
      }
    })
  ]
});

module.exports = devConfig;
