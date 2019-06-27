const WebpackConfig = require('webpack-config');
const Config = WebpackConfig.default;

module.exports = env => {
  WebpackConfig.environment.setAll({
    env: () => process.env.NODE_ENV
  });

  return new Config().extend('./webpack.[env].config.js');
};
