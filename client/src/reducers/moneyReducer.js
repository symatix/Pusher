import _ from 'lodash'
import { CHANGE_CITY, HANDLE_DRUG, PAY_AMOUNT } from '../actions/types'
export default function (state = {}, action) {

	switch (action.type) {
	case CHANGE_CITY:
		const dept = {
			loaner: Math.floor(state.loaner * 1.1),
			bank: Math.floor(state.bank * 1.05)
		}
		return _.merge({}, state, dept)

	case HANDLE_DRUG:
		const newState = { cash: action.payload.cash }
		return _.merge({}, state, newState)

	case PAY_AMOUNT:
		return _.merge({}, state, action.payload)
	default:
		return state
	}
}
