const webpack = require('webpack');
const WebpackConfig = require('webpack-config').default;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const prodConfig = new WebpackConfig().extend('./webpack.base.config.js').merge({
  devtool: 'source-map',
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        debug: false,
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
module.exports = prodConfig;
