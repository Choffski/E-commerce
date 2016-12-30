import { combineReducers } from 'redux';

import basketReducer from './basketReducer';
import productReducer from './productReducer';

const combinedReducers = combineReducers({

  basket: basketReducer,
  products: productReducer

});

export default combinedReducers;
