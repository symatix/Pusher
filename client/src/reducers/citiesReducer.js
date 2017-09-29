import { GET_CITY_LIST } from '../actions/types'

export default function (state = [], action) {

	switch (action.type) {

	case GET_CITY_LIST:
		return action.payload || false

	default:
		return state
	}
}
