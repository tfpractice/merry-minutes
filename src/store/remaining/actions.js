import {
  SET_REMAINING_TIME,
  UPDATE_REMAINING_TIME,
  CLEAR_REMAINING_TIME,
} from './constants';
import { Time } from '../../utils';

const { format } = Time;

export const set = time => state => format(time);
export const clear = () => state => format(Date.now());
export const update = () => state => format(state);

export const setRemaining = time => ({
  type: SET_REMAINING_TIME,
  op: set(time),
});

export const clearRemaining = time => ({
  type: CLEAR_REMAINING_TIME,
  op: clear(time),
});
export const updateRemaining = time => ({
  type: UPDATE_REMAINING_TIME,
  op: update(time),
});
