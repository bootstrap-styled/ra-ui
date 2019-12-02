const { join } = require('path');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

module.exports = {
  webpack: (config, env) => {
    if (env === 'development') {
      // necessary hack to allow aliasing from outside src to use our modules
      config.resolve.plugins = config.resolve.plugins.filter(plugin => !(plugin instanceof ModuleScopePlugin));

      // styled-components
      config.resolve.alias['styled-components'] = join(__dirname, 'node_modules/styled-components');

      // materialui
      config.resolve.alias['@material-ui/core'] = join(__dirname, 'node_modules/@material-ui/core');
      config.resolve.alias['@material-ui/icons'] = join(__dirname, 'node_modules/@material-ui/icons');
      config.resolve.alias['@material-ui/styles'] = join(__dirname, 'node_modules/@material-ui/styles');

      // react
      config.resolve.alias['react'] = join(__dirname, 'node_modules/react');
      config.resolve.alias['react-dom'] = join(__dirname, 'node_modules/react-dom');

      // react-router
      config.resolve.alias['connected-react-router'] = join(__dirname, 'node_modules/connected-react-router');
      config.resolve.alias['react-router'] = join(__dirname, 'node_modules/react-router');
      config.resolve.alias['react-router-dom'] = join(__dirname, 'node_modules/react-router-dom');

      // form
      config.resolve.alias['final-form'] = join(__dirname, 'node_modules/final-form');
      config.resolve.alias['final-form-arrays'] = join(__dirname, 'node_modules/final-form-arrays');
      config.resolve.alias['react-final-form'] = join(__dirname, 'node_modules/react-final-form');
      config.resolve.alias['react-final-form-arrays'] = join(__dirname, 'node_modules/react-final-form-arrays');

      // redux
      config.resolve.alias['redux'] = join(__dirname, 'node_modules/redux');
      config.resolve.alias['react-redux'] = join(__dirname, 'node_modules/react-redux');

      // react-admin
      config.resolve.alias['react-admin'] = join(__dirname, 'node_modules/@bootstrap-styled/react-admin');
      config.resolve.alias['ra-core'] = join(__dirname, 'node_modules/ra-core');
      config.resolve.alias['@bootstrap-styled/ra-ui'] = join(__dirname, '../..');
      config.resolve.alias['ra-ui-materialui'] = join(__dirname, '../..');
    }
    return config;
  },
};
