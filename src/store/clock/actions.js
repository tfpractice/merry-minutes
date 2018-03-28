import {START_CLOCK,
  PAUSE_CLOCK,
  TOGGLE_CLOCK,
  DECREMENT_CLOCK,
  SET_CLOCK_STATUS,
  SET_REMAINING_TIME,
  CLEAR_REMAINING_TIME,} from './constants';
import { remaining } from '../timer/operations';
import {toggle,
  clearRem,
  setActive,
  setRemaining,
  pause,
  start,
  decRem,} from './operations';

export const setStatus = status => ({
  type: SET_CLOCK_STATUS,
  op: setActive(status),
});

export const startClock = () => ({
  type: START_CLOCK,
  op: start,
});

export const pauseClock = () => ({
  type: PAUSE_CLOCK,
  op: pause,
});

export const toggleClock = () => ({
  type: TOGGLE_CLOCK,
  op: toggle,
});

export const updateRemaining = rem => ({
  type: SET_REMAINING_TIME,
  op: setRemaining(rem),
});

export const clearRemaining = () => ({
  type: CLEAR_REMAINING_TIME,
  op: clearRem,
});

export const decrement = () => ({
  type: DECREMENT_CLOCK,
  op: decRem,
});

export const resetClock = () => dispatch =>
  Promise.resolve(pauseClock())
    .then(dispatch)
    .then(clearRemaining)
    .then(dispatch);

export const beginCount = () => (dispatch, getState) =>
  Promise.resolve(remaining(getState().timer))
    .then(t => (t ? decrement() : resetClock()))
    .then(dispatch);

export const decrementClock = () => (dispatch, getState) =>
  Promise.resolve(remaining(getState().timer))
    .then(t => (t ? decrement() : dispatch(pauseClock()).then(clearRemaining)))
    .then(dispatch);
