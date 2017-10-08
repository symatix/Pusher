import { CHANGE_CITY } from '../actions/types'

export default function (state = {}, action) {

	switch (action.type) {
	case CHANGE_CITY:
		return action.payload.newCity

	default:
		return state
	}
}
