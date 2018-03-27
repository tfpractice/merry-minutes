import { Time } from '../../utils';
import { SET_START_TIME, CLEAR_START_TIME } from './constants';

const { format } = Time;

export const set = time => state => format(time);

export const clear = () => state => format(Date.now());

export const setStart = time => ({ type: SET_START_TIME, op: set(time) });

export const clearStart = time => ({
  type: SET_START_TIME,
  op: clear(time),
});
