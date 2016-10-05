import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BootstrapApp from './BootstrapApp';
import DragulaApp from './dragula/DragulaApp';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

ReactDOM.render(
  <DragulaApp />,
  document.getElementById('root')
);
