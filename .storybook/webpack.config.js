const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');
const path = require('path');

module.exports = (baseConfig, env, defaultConfig) => {
  const config = defaultConfig;
  
  // For example, add typescript loader:
  // config.module.rules.push({
  // });

  return config;
};