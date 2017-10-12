import _ from 'lodash'
import { CHANGE_CITY, HANDLE_DRUG, PAY_AMOUNT, DEAL_WITH_CREW } from '../actions/types'
export default function (state = {}, action) {

	switch (action.type) {
	case CHANGE_CITY:
		// on every city change, money has to be updated
		const dept = {
			deposit: Math.floor(state.deposit * 1.03),
			loaner: Math.floor(state.loaner * 1.2),
			bank: Math.floor(state.bank * 1.05),
			cash: state.cash - (state.bribe + state.salary),
		}
		return _.merge({}, state, dept)

	case HANDLE_DRUG:
		return _.merge({}, state, action.payload.money)

	case PAY_AMOUNT:
		return _.merge({}, state, action.payload)

	case DEAL_WITH_CREW:
		return _.merge({}, state, action.payload.money)

	default:
		return state
	}
}
