import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import { reducer as start } from './start';
import { reducer as end } from './end';
import { reducer as remaining } from './remaining';

const basic = (state = {}, { type, curry }) => state;

export default combineReducers({ start, end, remaining, form });
