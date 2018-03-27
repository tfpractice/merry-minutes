import { TIMER_ACTIONS } from './constants';
import { timer } from './operations';

export default (state = timer(), { type, op }) =>
  TIMER_ACTIONS.has(type) ? op(state) : state;
