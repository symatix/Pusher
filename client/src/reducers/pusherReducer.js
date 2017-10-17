import _ from 'lodash';
import { CHANGE_CITY, HANDLE_DRUG, HANDLE_SELF, BUY_GUN, BUY_STORAGE } from '../actions/types'
export default function (state = {}, action) {

	switch (action.type) {
	case CHANGE_CITY:
		const newDay = { days: state.days + 1 }
		return _.merge({}, state, newDay)

	case HANDLE_DRUG:
		return _.merge({}, state, action.payload.pusher)

	case HANDLE_SELF:
		return _.merge({}, state, action.payload.pusher)

	case BUY_GUN:
		return _.merge({}, state, action.payload.pusher)

	case BUY_STORAGE:
		return _.merge({}, state, action.payload.pusher)

	default:
		return state
	}
}
