import moment from 'moment';

export const format = (time = moment()) => moment(time).format('HH:mm:ss');
export const diff = a => b => moment(a).diff(moment(b), 'seconds');
export const add = (n = 15) => (t = moment()) => moment(t).add(n, 'seconds');
