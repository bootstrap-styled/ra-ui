import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'proxy-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import BootstrapProvider from '@bootstrap-styled/provider';
import App from './App';

// TODO: restore original index.js: (1) add bootstrap provider in <Admin /> and (2) import fontawesome.config from admin
import '../../../src/fontawesome.config';
import theme from '../../../src/theme';
console.log(theme);
ReactDOM.render(<BootstrapProvider theme={theme} injectGlobal reset><App /></BootstrapProvider>, document.getElementById('root'));
