import moment from 'moment';

import { Time } from '../../utils';

const { diff, add, format, deFormat, fieldFormat } = Time;

export const timer = (s = moment(), e = add(15)(s)) => ({
  start: moment(s),
  end: moment(e),
});

export const clear = t => timer();

export const start = ({ start } = timer()) => start;

export const end = ({ end } = timer()) => end;

export const copy = t => timer(start(t), end(t));

export const setStart = s => t => timer(s, end(t));

export const setEnd = e => t => timer(start(t), e);

export const startVal = t => deFormat(start(t));

export const endVal = t => deFormat(end(t));

export const startString = t => format(start(t));

export const endString = t => format(end(t));

export const startField = t => fieldFormat(startVal(t));

export const endField = t => fieldFormat(endVal(t));

export const checkStart = t => start(t).isBefore(end(t));

export const checkEnd = t => end(t).isAfter(start(t));

export const checkOrder = t1 => t0 =>
  checkStart(start(t1)(t0)) && checkEnd(end(t1)(t0));

export const ensureStart = s => t =>
  checkStart(start(t)(t)) && checkEnd(end(t)(t));

export const duration = t => diff(end(t))(start(t));

export const remaining = t => diff(end(t))(moment());
