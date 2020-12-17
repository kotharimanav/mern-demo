import { routerReducer } from 'react-redux-router';
import { combineReducers } from 'redux';
import auth from './auth';
import users from './users';

const createReducer = asyncReducer =>
  combineReducers({
    auth,
    users,
    route: routerReducer,
    ...asyncReducer
  });

export default createReducer;
