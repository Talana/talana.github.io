import App from './js/components/app';
import React from 'react';
import ReactDOM from 'react-dom';
import Dragula from './lib/Dragula';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(<App dragula={Dragula}/>,document.getElementById('root'));
