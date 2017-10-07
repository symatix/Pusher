import _ from 'lodash';
import { CHANGE_CITY, HANDLE_DRUG } from '../actions/types'
export default function (state = {}, action) {

	switch (action.type) {
	case CHANGE_CITY:
		const newDay = { days: state.days + 1 }
		return _.merge({}, state, newDay)

	case HANDLE_DRUG:
		const newAmount = state.possession + action.payload.amount;
		return _.merge({}, state, { possession: newAmount })

	default:
		return state
	}
}
