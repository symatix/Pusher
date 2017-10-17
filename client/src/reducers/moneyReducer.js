import _ from 'lodash'
import { CHANGE_CITY, HANDLE_DRUG, PAY_AMOUNT, DEAL_WITH_CREW, HANDLE_SELF, BUY_GUN, BUY_STORAGE } from '../actions/types'
export default function (state = {}, action) {

	switch (action.type) {
	case CHANGE_CITY:
		// on every city change, money has to be updated
		const { interest } = state;
		const dept = {
			deposit: Math.floor(state.deposit * (interest.deposit + 1)),
			loaner: Math.floor(state.loaner * (interest.loaner + 1)),
			bank: Math.floor(state.bank * (interest.bank + 1)),
			cash: state.cash - (state.bribe + state.salary),
		}
		return _.merge({}, state, dept)

	case HANDLE_DRUG:
		return _.merge({}, state, action.payload.money)

	case PAY_AMOUNT:
		return _.merge({}, state, action.payload)

	case DEAL_WITH_CREW:
		return _.merge({}, state, action.payload.money)

	case HANDLE_SELF:
		return _.merge({}, state, action.payload.money)

	case BUY_GUN:
		return _.merge({}, state, action.payload.money)

	case BUY_STORAGE:
		return _.merge({}, state, action.payload.money)

	default:
		return state
	}
}
