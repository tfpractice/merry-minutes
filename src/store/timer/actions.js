import { beginCount, resetClock, updateRemaining } from '../clock/actions';
import {
  clear,
  copy,
  fromInput,
  remaining,
  setEnd,
  setStart,
} from './operations';
import {
  CLEAR_TIMER,
  CREATE_TIMER,
  SET_TIMER_END,
  SET_TIMER_START,
} from './constants';

export const setTimerStart = time => ({
  type: SET_TIMER_START,
  op: setStart(time),
});

export const setTimerEnd = t => ({ type: SET_TIMER_END, op: setEnd(t) });

export const createTimer = t => ({
  type: CREATE_TIMER,
  op: () => copy(t),
});

export const clearTimer = () => ({ type: CLEAR_TIMER, op: clear });

export const resetTimer = () => dispatch =>
  Promise.resolve(clearTimer())
    .then(dispatch)
    .then(resetClock)
    .then(dispatch);

export const submitTimer = tValues => dispatch =>
  Promise.resolve(fromInput(tValues))
    .then(createTimer)
    .then(dispatch)
    .then(x => remaining(fromInput(tValues)))
    .then(updateRemaining)
    .then(dispatch)
    .then(beginCount)
    .then(dispatch);
