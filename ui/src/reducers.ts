/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineReducers } from 'redux';
import layoutReducers from './layout/store';

const createReducer = (asyncReducers: any = {}) => {
  return combineReducers({
    ...layoutReducers,
    ...asyncReducers,
  });
};

export default createReducer;
