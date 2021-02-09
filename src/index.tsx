import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';

import Routes from './routes'

ReactDOM.render(
    <BrowserRouter>
      <App />
      <Routes />
    </BrowserRouter>,
  document.getElementById('root')
);
