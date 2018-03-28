import { updateRemaining, beginCount, resetClock } from '../clock/actions';
import {
  SET_TIMER_START,
  CLEAR_TIMER,
  CREATE_TIMER,
  SET_TIMER_END,
} from './constants';
import {
  setStart,
  timer,
  copy,
  startVal,
  endVal,
  remaining,
  setEnd,
  clear,
} from './operations';

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

const fromInput = t => timer(startVal(t), endVal(t));

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
