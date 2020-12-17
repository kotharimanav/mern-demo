import { routerReducer } from 'react-redux-router';
import { combineReducers } from 'redux';
import auth from './auth';

const createReducer = asyncReducer =>
  combineReducers({
    auth,
    route: routerReducer,
    ...asyncReducer
  });

export default createReducer;
