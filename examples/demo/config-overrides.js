const { join } = require('path');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

module.exports = {
  webpack: (config, env) => {
    if (env === 'development') {
      config.resolve.plugins = config.resolve.plugins.filter(plugin => !(plugin instanceof ModuleScopePlugin));
      config.resolve.alias['@bootstrap-styled/ra-ui'] = join(__dirname, '../..');
    }
    return config;
  },
};
