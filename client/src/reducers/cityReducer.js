import { INIT_STATE } from '../actions/types'

export default function (state = {}, action) {

	switch (action.type) {

	case INIT_STATE:
		return action.payload || false

	default:
		return state
	}
}
