import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';
import App from './App';
import './index.css';

ReactDOM.render(<BootstrapProvider injectGlobal={true} reset={true}><App /></BootstrapProvider>, document.getElementById('root'));
