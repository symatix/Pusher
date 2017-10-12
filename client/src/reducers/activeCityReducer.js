import _ from 'lodash';
import { CHANGE_CITY, DEAL_WITH_CREW } from '../actions/types'

export default function (state = {}, action) {

	switch (action.type) {
	case CHANGE_CITY:
		return action.payload.newCity

	case DEAL_WITH_CREW:
		return _.merge({}, state, action.payload.activeCity)

	default:
		return state
	}
}
