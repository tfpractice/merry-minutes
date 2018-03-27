import { SET_END_TIME, CLEAR_END_TIME } from './constants';
import { Time } from '../../utils';

const { format } = Time;

export const set = time => state => format(time);

export const clear = () => state => format(Date.now());

export const setEnd = time => ({ type: SET_END_TIME, op: set(time) });

export const clearEnd = time => ({
  type: CLEAR_END_TIME,
  op: clear(time),
});
