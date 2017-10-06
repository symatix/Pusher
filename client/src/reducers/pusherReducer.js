import _ from 'lodash';
import { HANDLE_DRUG } from '../actions/types'
export default function (state = {}, action) {

	switch (action.type) {
	case HANDLE_DRUG:
		const newAmount = state.possession + action.payload.amount;
		return _.merge({}, state, { possession: newAmount })
	default:
		return state
	}
}
