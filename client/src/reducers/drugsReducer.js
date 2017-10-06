import _ from 'lodash';
import { CALCULATE_PRICES, HANDLE_DRUG } from '../actions/types'
import generatePrice from '../utils/generatePrice'

export default function (state = [], action) {

	switch (action.type) {

	case CALCULATE_PRICES:
		const prices = action.payload.map(({ name, min, max }) => {
			return { name: name, price: generatePrice(min, max) }
		})
		const drugs = _.merge([], state, prices);
		return drugs;

	case HANDLE_DRUG:
		const { name, possession } = action.payload;
		const newDrug = _.merge({}, _.find(state, { name }), { name, possession })
		const newState = _.map(state, (drug) => {
			if (drug.name === newDrug.name) {
				drug = newDrug;
			}
			return drug;
		})
		return newState;

	default:
		return state
	}
}
