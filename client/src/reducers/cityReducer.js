import _ from 'lodash';
import { INIT_STATE, MOVE_CITY } from '../actions/types'

export default function (state = {}, action) {

	switch (action.type) {

	case INIT_STATE:
		return action.payload || false

	case MOVE_CITY:
		return _.merge({}, state, action.payload);

	default:
		return state
	}
}
