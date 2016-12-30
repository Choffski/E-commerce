import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';


import combinedReducers from './Reducers/index';

const middleware = applyMiddleware(logger(), promise(), thunk );


export default createStore(combinedReducers, middleware);
