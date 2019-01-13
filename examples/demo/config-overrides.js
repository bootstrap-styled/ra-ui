const { join } = require('path');

module.exports = (config, env) => {
  //do stuff with the webpack config...
  config.module.rules = config.module.rules.map((rule) => {
    if (rule.oneOf) {
      rule.oneOf = rule.oneOf.map((loader) => {
        if (loader.loader && loader.loader.search(new RegExp('/babel-loader/lib/index.js$')) !== -1 && loader.include) {
          loader.include = [loader.include, join(__dirname, '../../src')];
        }
        return loader;
      });
    }
    return rule;
  });
  return config;
};
