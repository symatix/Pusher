import { CHANGE_CITY } from '../actions/types';

export default function (state = [], action) {

	switch (action.type) {
		case CHANGE_CITY:
			// if anything updated on active city parameters, has to go to the global cities array
			const { oldCity } = action.payload;
			const newState =	state.map(city => {
				if(city.name === oldCity.name){ return oldCity }
				return city
			});
			return newState

		default: return state
	}
}
