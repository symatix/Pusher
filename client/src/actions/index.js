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

export const setActiveDrug = drug => {
	return { type: fn.SET_ACTIVE_DRUG, payload: drug }
}

export const drugTransaction = drug => {
	return { type: fn.HANDLE_DRUG, payload: drug }
}
export const payLoaner = dept => {
	return { type: fn.PAY_AMOUNT, payload: dept }
}
