import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Routing from './Routing';
import './index.css';

import store from './store'



ReactDOM.render(
  <Provider store={store}>
  <Routing />
</Provider>
  ,document.getElementById('root')
);