import { START_ACTIONS } from './constants';

export default (state = Date.now(), { type, op }) =>
  START_ACTIONS.has(type) ? op(state) : state;
