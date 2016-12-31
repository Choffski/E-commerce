import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';


import Routing from './Routing';
import './index.css';

import store from './store'


injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
  <Routing />
</Provider>
  ,document.getElementById('root')
);
