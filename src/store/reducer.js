import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import { reducer as clock } from './clock';
import { reducer as start } from './start';
import { reducer as end } from './end';
import { reducer as timer } from './timer';

export default combineReducers({
  start,
  timer,
  clock,
  end,
  form,
});
