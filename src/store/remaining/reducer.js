import { REMAINING_ACTIONS } from './constants';

export default (state = 0, { type, op }) =>
  REMAINING_ACTIONS.has(type) ? op(state) : state;
