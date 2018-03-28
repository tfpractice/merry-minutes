import { Time } from '../../utils';
import { setStart as startTime } from '../start/actions';
import { setEnd as endTime } from '../end/actions';
import { setRemaining } from '../remaining/actions';
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
  start,
  end,
  setEnd,
  clear,
} from './operations';

const { diff, deFormat } = Time;

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

export const submitTimer = tValues => dispatch =>
  Promise.resolve(fromInput(tValues))
    .then(createTimer)
    .then(dispatch);

export const setTimes = ({ start, end }) => dispatch =>
  Promise.resolve(setTimerStart(deFormat(start)))
    .then(dispatch)
    .then(() => setTimerEnd(deFormat(end)))
    .then(dispatch)
    .then(x => createTimer({ start, end }))
    .then(dispatch)
    .then(x =>
      Promise.all([ startTime(start), endTime(end) ].map(dispatch)).then(() =>
        dispatch(setRemaining(diff(start)(end)))
      )
    );
