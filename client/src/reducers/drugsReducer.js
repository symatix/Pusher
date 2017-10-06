import _ from 'lodash';
import { CALCULATE_PRICES } from '../actions/types'
import generatePrice from '../utils/generatePrice'

export default function (state = [], action) {

	switch (action.type) {

	case CALCULATE_PRICES:
		const prices = action.payload.map(({ name, min, max }) => {
			return { name: name, price: generatePrice(min, max) }
		})
		const drugs = _.merge([], state, prices);
		return drugs;

	default:
		return state
	}
}
