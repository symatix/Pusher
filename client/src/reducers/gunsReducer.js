import _ from 'lodash';
import { BUY_GUN } from '../actions/types'

export default function gunsReducer(state = [], action) {

	switch (action.type) {
	case BUY_GUN:
		return state.map(gun => {
			if (gun.type === action.payload.guns.type) {
				return _.merge({}, gun, action.payload.guns)
			}
			return gun
		});

	default:
		return state
	}
}
