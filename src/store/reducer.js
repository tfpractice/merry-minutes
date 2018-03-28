import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import { reducer as clock } from './clock';
import { reducer as timer } from './timer';

export default combineReducers({
  timer,
  clock,

  form,
});
