import { END_ACTIONS } from './constants';

export default (state = Date.now(), { type, op }) =>
  END_ACTIONS.has(type) ? op(state) : state;
