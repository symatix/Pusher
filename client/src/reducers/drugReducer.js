import { BUY_SELL } from '../actions/types'

export default function (state = null, action) {

	switch (action.type) {

	case BUY_SELL:
		return action.payload || false

	default:
		return state
	}
}
