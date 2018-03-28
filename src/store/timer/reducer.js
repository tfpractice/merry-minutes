import { timer } from './operations';
import { TIMER_ACTIONS } from './constants';

export default (state = timer(), { type, op }) =>
  TIMER_ACTIONS.has(type) ? op(state) : state;
