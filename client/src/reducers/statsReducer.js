import _ from 'lodash';
import { INIT_STATE, UPDATE_STASH, UPDATE_DEPT, PAY_LOANER } from '../actions/types';

export default function (state = {}, action) {

	switch (action.type) {

	case INIT_STATE:
		return action.payload || false

	case UPDATE_STASH:
		return _.merge({}, state, action.payload);

	case UPDATE_DEPT:
		return _.merge({}, state, action.payload);

	case PAY_LOANER:
		return _.merge({}, state, action.payload);

	default:
		return state
	}
}
