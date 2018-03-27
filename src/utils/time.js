import moment from 'moment';

export const TFORMAT = `hh:mm:ss`;
export const DFORMAT = `hh:mm:ss a`;
export const deFormat = dString =>
  moment(dString, TFORMAT, DFORMAT, moment.ISO_8601);
export const format = (time = moment()) => moment(time).format(TFORMAT);
export const diff = a => b => moment(a).diff(moment(b), 'seconds');
export const add = (n = 15) => (t = moment()) => moment(t).add(n, 's');
