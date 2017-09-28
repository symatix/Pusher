import _ from 'lodash';
import { INIT_STATE, UPDATE_STASH } from '../actions/types';

export default function (state = {}, action) {

	switch (action.type) {

	case INIT_STATE:
		return action.payload || false

	case UPDATE_STASH:
		const newStats = action.payload;
		console.log(newStats)
		return _.merge({}, state, action.payload);


	default:
		return state
	}
}
