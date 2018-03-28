import { clock } from './operations';
import { CLOCK_ACTIONS } from './constants';

export default (state = clock(), { type, op }) =>
  CLOCK_ACTIONS.has(type) ? op(state) : state;
