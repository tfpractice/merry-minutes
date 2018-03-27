import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import { reducer as start } from './start';
import { reducer as end } from './end';
import { reducer as remaining } from './remaining';
import { reducer as timer } from './timer';

export default combineReducers({
  start,
  timer,
  end,
  remaining,
  form,
});
