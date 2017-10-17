import _ from 'lodash';
import { BUY_STORAGE } from '../actions/types'

export default function gunsReducer(state = [], action) {

	switch (action.type) {
	case BUY_STORAGE:
		return state.map(storage => {
			if (storage.type === action.payload.storage.type) {
				return _.merge({}, storage, action.payload.storage)
			}
			return storage
		});

	default:
		return state
	}
}
