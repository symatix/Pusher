import * as TYPE from '../actions/types'
import generatePrice from '../utils/generatePrice'

export default function (state = {}, action) {

	switch (action.type) {

	case TYPE.GET_PRICES:
		const prices = action.payload.map(({ name, min, max }) => {
			return {
				name,
				price: generatePrice(min, max)
			}
		})
		return prices

	default:
		return state
	}
}
