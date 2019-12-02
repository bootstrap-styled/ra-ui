# @bootstrap-styled/ra-ui Demo

This is a demo of the [@bootstrap-styled/ra-ui](https://github.com/bootstrap-styled/ra-ui) UI library for react-admin.

**Note**: This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


## How we did the demo

We have copied and leaved untouched the original code available at https://github.com/marmelab/react-admin/tree/master/examples/demo

Using `react-app-rewired`, we tweaked the webpack config as follow:

```javascript
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
```

- `config.resolve.alias['react-admin'] = join(__dirname, 'node_modules/@bootstrap-styled/react-admin');`
allow us to not edit any import of `react-admin`, while still using `@bootstrap-styled/react-admin`
- `@bootstrap-styled/react-admin` is using `@bootstrap-styled/ra-ui` for all it's UI.
- Because the current project need to update while developing `@bootstrap-styled/ra-ui`,
we added `config.resolve.alias['@bootstrap-styled/ra-ui'] = join(__dirname, '../..');` so no matter what happen, it will use the local version
- All the other aliases are used to prevent duplicate dependency conflict.

Thanks to this environment, it is easy to:
 
- update the `demo`, just copy past the code from [the original demo](https://github.com/marmelab/react-admin/tree/master/examples/demo)
- swap to the materialui version, just comment the resolve for `react-admin`.
- update `src` with the latest `ra-ui-materialui` code, just place the content of `ra-ui-materialui/lib` into `src`, it will acte as material ui, 
support the editing thanks to `devDependencies` of this package that bring material ui dependency in development.
- Update the lib live and view the changes in real time

  


## How to run

After having cloned the react-admin repository, run the following commands at the react-admin root:

```sh
make install

make build

make run-demo
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run deploy`

Deploy the build to GitHub gh-pages.
