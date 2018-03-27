import { SET_END_TIME, CLEAR_END_TIME } from './constants';

export const set = time => state => time;

export const clear = () => state => Date.now();

export const setEnd = time => ({ type: SET_END_TIME, op: set(time) });

export const clearEnd = time => ({
  type: CLEAR_END_TIME,
  op: clear(time),
});
