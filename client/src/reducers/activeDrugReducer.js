import { SET_ACTIVE_DRUG } from '../actions/types'

export default function (state = {}, action) {

	switch (action.type) {
	case SET_ACTIVE_DRUG:
		return action.payload
	default:
		return state
	}
}
