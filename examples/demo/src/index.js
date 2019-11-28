import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'proxy-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import BootstrapProvider from '@bootstrap-styled/provider';

import App from './App';

ReactDOM.render(<BootstrapProvider injectGlobal={true} reset={true}><App /></BootstrapProvider>, document.getElementById('root'));
