import moment from 'moment';

export const format = (time = moment()) => moment(time).format('HH:mm:ss');
export const diff = a => b => moment(a).diff(moment(b), 'seconds');
