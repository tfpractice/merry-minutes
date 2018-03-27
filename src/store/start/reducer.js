import { START_ACTIONS } from './constants';
import { Time } from '../../utils';

export default (state = Time.format(), { type, op }) =>
  START_ACTIONS.has(type) ? op(state) : state;
