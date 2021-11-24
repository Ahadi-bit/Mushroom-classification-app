import React from 'react';
import ReactDOM from 'react-dom';
import Application from './Application';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Application />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
