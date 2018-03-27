import { Time } from '../../utils';
import { setStart as startTime } from '../start/actions';
import { setEnd as endTime } from '../end/actions';

const { diff, format } = Time;

const timer = (start, end) => {
  start, end;
};

const start = ({ start, end }) => format(start);

const end = ({ start, end }) => format(end);

const remaining = ({ start, end }) => diff(start, end);

const setStart = s => t => timer(s, end(t));

const setEnd = e => t => timer(start(t), e);

export const setTimes = ({ start, end }) => dispatch =>
  Promise.all([ startTime(start), endTime(end) ].map(dispatch));
