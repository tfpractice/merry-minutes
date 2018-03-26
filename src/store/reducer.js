import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const basic = (state = {}, { type, curry }) => state;

export default combineReducers({ basic, form });
