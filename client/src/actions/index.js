import axios from 'axios'
import * as fn from './types'


export const fetchUser = () => async dispatch => {
	const res = await axios.get("/api/current_user");

	dispatch({ type: fn.FETCH_USER, payload: res.data });
};

export const calculatePrices = (drugs) => {
	return { type: fn.CALCULATE_PRICES, payload: drugs }
}

export const changeActiveCity = (city) => {
	return { type: fn.CHANGE_CITY, payload: city }
}
