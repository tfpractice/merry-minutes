import { SET_START_TIME, CLEAR_START_TIME } from './constants';

export const set = time => state => time;

export const clear = () => state => Date.now();

export const setStart = time => ({ type: SET_START_TIME, op: set(time) });

export const clearStart = time => ({
  type: SET_START_TIME,
  op: clear(time),
});
