import { END_ACTIONS } from './constants';
import { Time } from '../../utils';

export default (state = Time.format(), { type, op }) =>
  END_ACTIONS.has(type) ? op(state) : state;
