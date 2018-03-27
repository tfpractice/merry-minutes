import moment from 'moment';

export const TFORMAT = `hh:mm:ss`;
export const deFormat = dString => moment(dString, TFORMAT);
export const format = (time = moment()) => moment(time).format(TFORMAT);
export const diff = a => b => moment(a).diff(moment(b), 'seconds');
export const add = (n = 15) => (t = moment()) => moment(t).add(n, 's');
