import {
  START_CLOCK,
  PAUSE_CLOCK,
  TOGGLE_CLOCK,
  DECREMENT_CLOCK,
  SET_CLOCK_STATUS,
  SET_REMAINING_TIME,
  CLEAR_REMAINING_TIME,
} from './constants';
import {
  toggle,
  clearRem,
  setActive,
  setRemaining,
  pause,
  start,
  decRem,
} from './operations';

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

export const clearRemaining = rem => ({
  type: CLEAR_REMAINING_TIME,
  op: clearRem(rem),
});

export const decrementClock = () => ({
  type: DECREMENT_CLOCK,
  op: decRem,
});

// export const checkTime = () => dispatch => Promise.resolve;
